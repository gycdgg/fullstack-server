import { Product, Feature, Application, Package, Product_pic } from '../models'
import orm from '../models/Sequelize'

class ProductController {
  async _get(ctx) {
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
          { model: Package, as: 'packages', where: { is_deleted: false }, attributes: [ 'id', 'name' ] }
        ]
      })
    }
  }

  async create(ctx) {
    const { body } = ctx.request
    const { features, applications, packages, workshops, product_pic } = body
    const t = await orm.transaction()
    try{
      const product = await Product.create(body, {
        fields: [ 'name', 'category', 'summary' ],
        transaction: t
      })
      const productId = product.id
      const optomizeArr = function (arr) {
        return arr.map(v => { 
          return { name: v, product_id: productId }
        })
      } 
      const optomizeArrObj = function (arr) {
        arr.map(v => { 
          return { name: v.name, url: v.url, uid: v.uid, status: v.status, product_id: productId }
        })
      }
      await Feature.bulkBuild(optomizeArr(features), {
        transaction: t
      })
      await Application.bulkBuild(optomizeArr(applications), {
        transaction: t
      })
      await Package.bulkBuild(optomizeArr(packages), {
        transaction: t
      })
      await Product_pic.bulkBuild(optomizeArrObj(product_pic), {
        transaction: t
      })
  
      await Workshops.bulkBuild(optomizeArrObj(workshops), {
        transaction: t
      })
      await t.commit()
      ctx.body = {
        message: 'Success'
      }
    } catch (err) {
      console.log(err)
      await t.rollback()
    }
    
    return { a: 1 }
  }
}

export default new ProductController