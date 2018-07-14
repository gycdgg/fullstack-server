import Sequelize from 'sequelize'
import sequelize from './Sequelize.js'

export default sequelize.define('product_pic', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: true,
    unique: false
  },
  url: {
    type: Sequelize.STRING,
    allowNull: true,
    unique: false
  },
  type: {
    type: Sequelize.STRING
  },
  uid: {
    type: Sequelize.STRING,
    allowNull: true,
    unique: false
  },
  is_deleted: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },

}, {
  tableName: 'product_pic'
})