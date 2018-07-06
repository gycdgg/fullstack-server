import sequelize from './models/sequelize'
import { Picture, User, Product, Feature } from './models'

(async () => {
  try{
    //drop stchemas and sync table
    await sequelize.query('DROP TABLE `edmond`.`feature`, `edmond`.`picture`, `edmond`.`product`, `edmond`.`user`')
    sequelize.sync({ force: true })
    await Picture.sync({ force: true })
    await User.sync({ force: true })
    await Product.sync({ force: true })
    await Feature.sync({ force: true })
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

    await Product.create({
      name: 'test product1',
      summary: 'this is a test summary, just a test case11111',
      pdf_name: 'name111',
      pdf_url: 'http://www.baidu.com'
    })

    await Product.create({
      name: 'test product2',
      summary: 'this is a test summary, just a test case2222',
      pdf_name: 'name222',
      pdf_url: 'http://www.baidu.com'
    })

    await Feature.create({
      name: 'this is a fature1',
      productId: 1
    })

    await Feature.create({
      name: 'this is a fature2',
      productId: 1
    })
    await Feature.create({
      name: 'this is a fature3',
      productId: 1
    })
    await Feature.create({
      name: 'this is a fature4',
      productId: 1
    })
    await Feature.create({
      name: 'this is a fature5',
      productId: 2
    })
    console.log('sync mysql success')
  } catch (err) {
    console.log(err)
  }
})()