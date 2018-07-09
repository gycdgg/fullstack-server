import Sequelize from 'sequelize'
import sequelize from './Sequelize.js'

export default sequelize.define('workshop', {
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
  is_deleted: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },

}, {
  tableName: 'workshop'
})