import Sequelize from 'sequelize'
import sequelize from './Sequelize.js'

export default sequelize.define('quote', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  first_name: {
    type: Sequelize.STRING,
    allowNull: true,
    unique: false
  },
  last_name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  company: {
    type: Sequelize.STRING
  },
  country: {
    type: Sequelize.STRING
  },
  phone: {
    type: Sequelize.STRING
  },
  product_detail: {
    type: Sequelize.STRING
  },
  is_deleted: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },

}, {
  tableName: 'quote'
})