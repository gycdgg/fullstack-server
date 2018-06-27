import sequelize from './models/sequelize'
import { Picture } from './models'
(async () => {
  try{
    await sequelize.dropAllSchemas()
    await Picture.sync({ force: true })
    await Picture.create({
      url: 'this is url test1',
      title: 'test title',
      type: 'test type',
      desc: 'test desc'
    })
    await Picture.create({
      url: 'this is url test1',
      title: 'test title',
      type: 'test type',
      desc: 'test desc'
    })
    await Picture.create({
      url: 'this is url test2',
      title: 'test title',
      type: 'test type',
      desc: 'test desc'
    })
    await Picture.create({
      url: 'this is url test3',
      title: 'test title',
      type: 'test type',
      desc: 'test desc'
    })
    await Picture.create({
      url: 'this is url test4',
      title: 'test title',
      type: 'test type',
      desc: 'test desc'
    })
  } catch (err) {
    console.log(err)
  }
})()