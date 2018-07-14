import Picture from './picture'
import User from './user'
import Feature from './feature'
import Product from './product'
import Application from './application'
import Package from './package'
import Workshop from './workshop'
import Quote from './quote'
import Quote_file from './quote_file'
import Product_pic from './product_pic'

Product.hasMany(Feature, { as: 'features', foreignKey: 'productId', onDelete: 'cascade', hooks: true })
Feature.belongsTo(Product, { as: 'features', foreignKey: 'productId', onDelete: 'cascade', hooks: true })

Product.hasMany(Application, { as: 'applications', foreignKey: 'productId', onDelete: 'cascade', hooks: true })
Application.belongsTo(Product, { as: 'applications', foreignKey: 'productId', onDelete: 'cascade', hooks: true })

Product.hasMany(Package, { as: 'packages', foreignKey: 'productId', onDelete: 'cascade', hooks: true })
Package.belongsTo(Product, { as: 'packages', foreignKey: 'productId', onDelete: 'cascade', hooks: true })

Product.hasMany(Workshop, { as: 'workshops', foreignKey: 'productId', onDelete: 'cascade', hooks: true })
Workshop.belongsTo(Product, { as: 'workshops', foreignKey: 'productId', onDelete: 'cascade', hooks: true })

Product.hasMany(Product_pic, { as: 'product_pics', foreignKey: 'productId', onDelete: 'cascade', hooks: true })
Product_pic.belongsTo(Product, { as: 'product_pics', foreignKey: 'productId', onDelete: 'cascade', hooks: true })

Quote.hasMany(Quote_file, { as: 'files', foreignKey: 'quoteId', onDelete: 'cascade', hooks: true })
Quote_file.belongsTo(Quote, { as: 'files', foreignKey: 'quoteId', onDelete: 'cascade', hooks: true })


export {
  Picture,
  User,
  Feature,
  Application,
  Package,
  Workshop,
  Product_pic,
  Product,
  Quote_file,
  Quote
}