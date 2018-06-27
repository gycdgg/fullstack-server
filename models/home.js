import Sequelize from 'sequelize'
import sequelize from './Sequelize.js'

export default sequelize.define('home', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  banner_url: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  role: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  tableName: 'Home'
})
