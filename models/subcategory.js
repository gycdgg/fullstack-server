import Sequelize from 'sequelize'
import sequelize from './Sequelize.js'

export default sequelize.define('subcategory', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: true,
    unique: false
  }
}, {
  tableName: 'subcategory'
})