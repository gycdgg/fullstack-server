import Picture from './picture'
import User from './user'
import Feature from './feature'
import Product from './product'
import Application from './application'
import Package from './package'
import Workshop from './workshop'

Product.hasMany(Feature, { as: 'features', foreignKey: 'productId', onDelete: 'cascade', hooks: true })
Feature.belongsTo(Product, { as: 'features', foreignKey: 'productId', onDelete: 'cascade', hooks: true })

Product.hasMany(Application, { as: 'applications', foreignKey: 'productId', onDelete: 'cascade', hooks: true })
Application.belongsTo(Product, { as: 'applications', foreignKey: 'productId', onDelete: 'cascade', hooks: true })

Product.hasMany(Package, { as: 'packages', foreignKey: 'productId', onDelete: 'cascade', hooks: true })
Package.belongsTo(Product, { as: 'packages', foreignKey: 'productId', onDelete: 'cascade', hooks: true })

Product.hasMany(Workshop, { as: 'workshops', foreignKey: 'productId', onDelete: 'cascade', hooks: true })
Workshop.belongsTo(Product, { as: 'workshops', foreignKey: 'productId', onDelete: 'cascade', hooks: true })

export {
  Picture,
  User,
  Feature,
  Application,
  Package,
  Product
}