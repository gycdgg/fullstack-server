import Sequelize from 'sequelize'
import sequelize from './sequelize.js'

export default sequelize.define('picture', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  url: {
    type: Sequelize.STRING,
    allowNull: true,
    unique: false
  },
  desc: {
    type: Sequelize.STRING,
    allowNull: true,
    unique: false
  },
  title: {
    type: Sequelize.STRING,
    allowNull: true,
    unique: false
  },
  type: {
    type: Sequelize.STRING,
    allowNull: true,
    unique: false
  }
}, {
  tableName: 'Picture'
})