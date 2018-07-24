import { Product, Feature, Application, Package, Product_pic, Workshop } from '../models'
import orm from '../models/Sequelize'


class ProductController {
  async _get(ctx) {
    const { limit, offset, category } = ctx.query
    const whereClause = {
      is_deleted: false
    }
    if(ctx.params.id) {
      return Product.findOne({
        where: {
          is_deleted: false,
          id: ctx.params.id 
        },
        attributes: [ 'id', 'name', 'summary', 'category' ],
        include: [
          { model: Feature, as: 'features', where: { is_deleted: false }, attributes: [ 'id', 'name' ] },
          { model: Application, as: 'applications', where: { is_deleted: false }, attributes: [ 'id', 'name' ] },
          { model: Package, as: 'packages', where: { is_deleted: false }, attributes: [ 'id', 'name' ] },
          { model: Product_pic, as: 'product_pics', where: { is_deleted: false }, attributes: [ 'id', 'name', 'url' ] },                  
          { model: Workshop, as: 'workshops', where: { is_deleted: false }, attributes: [ 'id', 'name', 'url' ] },
        ]
      })
    } else {
      
      if(category) {
        Object.assign(whereClause, { category })
      }
      return Product.findAndCount({
        offset: +offset,
        limit: +limit,
        where: whereClause,
        attributes: [ 'id', 'name', 'summary', 'category' ],
        include: [
          // { model: Feature, as: 'features', where: { is_deleted: false }, attributes: [ 'name', 'id' ] },
          // { model: Application, as: 'applications', where: { is_deleted: false }, attributes: [ 'id', 'name' ] },
          // { model: Package, as: 'packages', where: { is_deleted: false }, attributes: [ 'id', 'name' ] },
          // { model: Product_pic, as: 'product_pics', where: { is_deleted: false }, attributes: [ 'id', 'name', 'type', 'url' ] },           
          // { model: Workshop, as: 'workshops', where: { is_deleted: false }, attributes: [ 'id', 'name', 'url' ] },
        ]
      })
    }
  }

  async create(ctx) {
    if(!(ctx.session && ctx.session.id)) {
      ctx.status = 403
      ctx.body = {
        name: 'unauthortized',
        message: 'user or client unauthortized'
      }
      return
    }
    const { body } = ctx.request
    const { features, applications, packages, workshop_pic, product_pic, product_pdf } = body
    const t = await orm.transaction()
    const localTransaction = { transaction: t }
    try{
      const product = await Product.create(body, {
        fields: [ 'name', 'category', 'summary' ],
        transaction: t
      })
      const productId = product.id
      const optomizeArr =  (arr) => arr.map(v => { 
        return { name: v, product_id: productId }
      })
      const optomizeArrObj =  (arr) => arr.map(v => { 
        return { name: v.name, url: v.url, uid: v.uid, status: v.status, product_id: productId, type: v.type }
      })
      if(Array.isArray(features)) await Feature.bulkCreate(optomizeArr(features), localTransaction)
      if(Array.isArray(applications)) await Application.bulkCreate(optomizeArr(applications), localTransaction)
      if(Array.isArray(packages)) await Package.bulkCreate(optomizeArr(packages), localTransaction)
      // product_pic and product_pdf both stored in product_pic table
      if(Array.isArray(product_pdf) || Array.isArray(product_pic)) await Product_pic.bulkCreate(optomizeArrObj([ ...product_pic, ...product_pdf ]), localTransaction)
      if(Array.isArray(workshop_pic)) await Workshop.bulkCreate(optomizeArrObj(workshop_pic), localTransaction)
      await t.commit()
      ctx.status = 200
      ctx.body = {
        message: 'Success'
      }
    } catch (err) {
      console.log(err)
      await t.rollback()
      ctx.status = 500
      ctx.body = {
        name: 'Server error',
        message: 'An Unexpected condition was encountered in the server and no more specific message is suitable'
      }
    }
    
    return { a: 1 }
  }

  async _delete(ctx) {
    const { id } = ctx.params
    await Product.update({
      is_deleted: true
    }, {
      where: { id }
    })
    return true
  }
}

export default new ProductController