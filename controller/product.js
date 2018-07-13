import { Product, Feature, Application, Package } from '../models'

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
    return { a: 1 }
  }
}

export default new ProductController