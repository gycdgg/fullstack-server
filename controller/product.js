import { Product, Feature, Application, Package, Product_pic, Workshop } from '../models'
import orm from '../models/Sequelize'

class ProductController {
  async _get(ctx) {
    console.log('11111111111111111111çççç')
    if(ctx.params.id) {
      return Product.findOne({
        where: {
          is_deleted: false,
          id: ctx.params.id
        },
        attributes: [ 'id', 'name', 'summary' ],
        include: [
          { model: Feature, as: 'features', where: { is_deleted: false }, attributes: [ 'id', 'name' ] },
          { model: Application, as: 'applications', where: { is_deleted: false }, attributes: [ 'id', 'name' ] },
          { model: Package, as: 'packages', where: { is_deleted: false }, attributes: [ 'id', 'name' ] },
          { model: Product_pic, as: 'product_pics' },                  
          { model: Workshop, as: 'workshops', where: { is_deleted: false }, attributes: [ 'id', 'name', 'url' ] },
        ]
      })
    } else {
      return Product.findAndCount({
        where: {
          is_deleted: false
        },
        attributes: [ 'id', 'name', 'summary' ],
        include: [
          { model: Feature, as: 'features', where: { is_deleted: false }, attributes: [ 'name', 'id' ] },
          { model: Application, as: 'applications', where: { is_deleted: false }, attributes: [ 'id', 'name' ] },
          { model: Package, as: 'packages', where: { is_deleted: false }, attributes: [ 'id', 'name' ] },
          { model: Product_pic, as: 'product_pics', where: { is_deleted: false }, attributes: [ 'id', 'name', 'type', 'url' ] },           
          { model: Workshop, as: 'workshops', where: { is_deleted: false }, attributes: [ 'id', 'name', 'url' ] },
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
      await Feature.bulkCreate(optomizeArr(features), localTransaction)
      await Application.bulkCreate(optomizeArr(applications), localTransaction)
      await Package.bulkCreate(optomizeArr(packages), localTransaction)
      // product_pic and product_pdf both stored in product_pic table
      await Product_pic.bulkCreate(optomizeArrObj([ ...product_pic, ...product_pdf ]), localTransaction)
      await Workshop.bulkCreate(optomizeArrObj(workshop_pic), localTransaction)
      await t.commit()
      ctx.status = 200
      ctx.body = {
        message: 'Success'
      }
    } catch (err) {
      await t.rollback()
      ctx.status = 500
      ctx.body = {
        name: 'Server error',
        message: 'An Unexpected condition was encountered in the server and no more specific message is suitable'
      }
    }
    
    return { a: 1 }
  }
}

export default new ProductController