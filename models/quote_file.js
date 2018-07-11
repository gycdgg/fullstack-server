import Sequelize from 'sequelize'
import sequelize from './Sequelize.js'

export default sequelize.define('quota_file', {
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
  status: {
    type: Sequelize.STRING,
    defaultValue: 'done'
  },
  is_deleted: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  uid: {
    type: Sequelize.STRING
  }
}, {
  tableName: 'quota_file'
})