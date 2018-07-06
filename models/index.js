import Picture from './picture'
import User from './user'
import Feature from './feature'
import Product from './product'

Product.hasMany(Feature, { as: 'features', foreignKey: 'productId', onDelete: 'cascade', hooks: true })
Feature.belongsTo(Product, { as: 'features', foreignKey: 'productId', onDelete: 'cascade', hooks: true })

export {
  Picture,
  User,
  Feature,
  Product
}