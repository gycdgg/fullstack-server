import Sequelize from 'sequelize'
import sequelize from './Sequelize.js'

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
  category: {
    type: Sequelize.STRING,
    allowNull: true,
    unique: false
  },
  status: {
    type: Sequelize.STRING,
    defaultValue: 'done'
  },
  name: {
    type: Sequelize.STRING
  },
  is_deleted: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
}, {
  tableName: 'Picture'
})