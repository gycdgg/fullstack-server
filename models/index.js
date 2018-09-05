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
import Category from './category'
import Subcategory from './subcategory'

Product.hasMany(Feature, { as: 'features', foreignKey: 'product_id', onDelete: 'cascade', hooks: true })
Feature.belongsTo(Product, { as: 'features', foreignKey: 'product_id', onDelete: 'cascade', hooks: true })

Product.hasMany(Application, { as: 'applications', foreignKey: 'product_id', onDelete: 'cascade', hooks: true })
Application.belongsTo(Product, { as: 'applications', foreignKey: 'product_id', onDelete: 'cascade', hooks: true })

Product.hasMany(Package, { as: 'packages', foreignKey: 'product_id', onDelete: 'cascade', hooks: true })
Package.belongsTo(Product, { as: 'packages', foreignKey: 'product_id', onDelete: 'cascade', hooks: true })

Product.hasMany(Workshop, { as: 'workshops', foreignKey: 'product_id', onDelete: 'cascade', hooks: true })
Workshop.belongsTo(Product, { as: 'workshops', foreignKey: 'product_id', onDelete: 'cascade', hooks: true })

Product.hasMany(Product_pic, { as: 'product_pics', foreignKey: 'product_id', onDelete: 'cascade', hooks: true })
Product_pic.belongsTo(Product, { as: 'product_pics', foreignKey: 'product_id', onDelete: 'cascade', hooks: true })

Quote.hasMany(Quote_file, { as: 'files', foreignKey: 'quote_id', onDelete: 'cascade', hooks: true })
Quote_file.belongsTo(Quote, { as: 'files', foreignKey: 'quote_id', onDelete: 'cascade', hooks: true })

Category.hasMany(Subcategory, { as: 'subcategorys', foreignKey: 'category_id', onDelete: 'cascade', hooks: true })
Subcategory.belongsTo(Category, { as: 'subcategorys', foreignKey: 'category_id', onDelete: 'cascade', hooks: true })

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
  Quote,
  Category,
  Subcategory
}