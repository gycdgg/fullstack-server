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
      name: '22490202.jpg',
      uid: '1111',
      category: 'home_banner',
      url: 'http://localhost:9090/static/uploads/22490202.jpg'
    })

    await Picture.create({
      name: '22490202.jpg',
      category: 'home_banner',
      uid: '2222',
      url: 'http://localhost:9090/static/uploads/22490202.jpg'
    })
    await Picture.create({
      name: 'logo.jpg',
      category: 'home_banner',
      uid: '3333',
      url: 'http://localhost:9090/static/uploads/logo.jpg'
    })
    await Picture.create({
      name: '22490202.jpg',
      uid: '44444',
      category: 'home_banner',
      url: 'http://localhost:9090/static/uploads/22490202.jpg'
    })
    await Picture.create({
      name: 'logo.jpg',
      uid: '5555',
      category: 'home_banner',
      url: 'http://localhost:9090/static/uploads/logo.jpg'
    })
    await Picture.create({
      name: '22490202.jpg',
      title: 'product1',
      category: 'home_product',
      url: 'http://localhost:9090/static/uploads/22490202.jpg'
    })
    await Picture.create({
      name: 'logo.jpg',
      title: 'product2',
      category: 'home_product',
      url: 'http://localhost:9090/static/uploads/logo.jpg'
    })

    await Picture.create({
      name: 'logo.jpg',
      title: 'app1',
      category: 'home_app',
      url: 'http://localhost:9090/static/uploads/logo.jpg'
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