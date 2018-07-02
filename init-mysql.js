import sequelize from './models/sequelize'
import { Picture, User } from './models'
(async () => {
  try{
    // drop stchemas and sync table
    await sequelize.dropAllSchemas()
    await Picture.sync({ force: true })
    await User.sync({ force: true })

    // create mock data
    await Picture.create({
      url: 'this is url test1',
      title: 'test title',
      category: 'banner',
      desc: 'test desc'
    })
    await Picture.create({
      url: 'this is url test1',
      title: 'test title',
      type: 'test type',
      category: 'banner',
      is_deleted: true
    })
    await Picture.create({
      url: 'this is url test2',
      title: 'test title',
      type: 'test type',
      category: 'app',
      is_deleted: false
    })
    await Picture.create({
      url: 'this is url test3',
      title: 'test title',
      category: 'app',
      desc: 'app'
    })
    await Picture.create({
      url: 'this is url test4',
      title: 'test title',
      category: 'product',
      desc: 'test desc'
    })

    await User.create({
      username: 'edguan',
      password: '123456'
    })
    await User.create({
      username: 'sandy',
      password: '12345',
      is_deleted: true
    })
  } catch (err) {
    console.log(err)
  }
})()