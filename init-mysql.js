//import sequelize from './models/sequelize'
import { Picture, User, Product, Feature, Application, Package, Workshop, Quote, Quote_file, Product_pic } from './models'

(async () => {
  try{
    //drop stchemas and sync table
    //await sequelize.query('DROP TABLE `test1`.`feature`, `test1`.`picture`, `test1`.`product`, `test1`.`user`, `test1`.`application`, `test1`.`package`')

    await Picture.sync({ force: true })
    await User.sync({ force: true })
    await Product.sync({ force: true })
    await Feature.sync({ force: true })
    await Application.sync({ force: true })
    await Package.sync({ force: true })
    await Workshop.sync({ force: true })
    await Quote.sync({ force: true })
    await Quote_file.sync({ force: true })
    await Product_pic.sync({ force: true })
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
    await Application.create({
      name: 'this is a Application1',
      productId: 1
    })
    await Application.create({
      name: 'this is a Application2',
      productId: 1
    })
    await Application.create({
      name: 'this is a Application3',
      productId: 2
    })
    await Package.create({
      name: 'this is a package1',
      productId: 1
    })
    await Package.create({
      name: 'this is a package2',
      productId: 1
    })
    await Package.create({
      name: 'this is a package3',
      productId: 2
    })
    await Workshop.create({
      name: 'this is a workshop1',
      productId: 1
    })
    await Workshop.create({
      name: 'this is a workshop22',
      productId: 1
    })
    await Workshop.create({
      name: 'this is a workshop3',
      productId: 2
    })
    console.log('sync mysql success')
  } catch (err) {
    console.log(err)
  }
})()