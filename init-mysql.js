//import sequelize from './models/sequelize'
import { Picture, User, Product, Feature, Application, Package, Workshop, Quote, Quote_file, Product_pic, Category, Subcategory } from './models'

const mockCate = {
  'xWDM & OADM': [ 'CWDM Mux/Demuxs', 'CWDM OADMs', 'DWDM Mux/Demuxs', 'DWDM OADMs', 'AAWG', 'CCWDM Modules', 'LAN WDM', 'Optical Amplifiers' ],
  '10G/1G Transceivers': [ '1000BASE SFP', 'Copper SFP', 'BiDi SFP', 'CWDM SFP', 'DWDM SFP', '10G SFP+', '10G XFP' ],
  '25G/40G/100G Transceivers': [ '25G SFP28', '40G QSFP+', '56G QSFP28', '100G CFP/CFP2/CFP4', '120 CXP' ],
  'Direct Attach Cables': [ '10G SFP+  DAC', '25G SFP28 DAC', '40G QSFP+  DAC', '56G QSFP+  DAC', '100G QSFP28 DAC' ],
  'Active Optical Cables': [ '10G SFP+ AOC', '25G SFP28 AOC', '40G QSFP+ AOC', '56G QSFP+  AOC', '100G QSFP28 AOC' ],
  'MTP/MPO': [ 'MPO Cables', 'MTP Cables', 'MTP/MPO Patch panel', 'MTP/MPO Cassettes', 'MTP/MPO Loopbacks' ],
  'Fiber Patch Cables': [ 'Fiber Patch Cord', 'Pre-Terminated Patch Cords',	'Fiber Optic Pigtail', 'Fiber Optic Adapter',	'Fiber Optic Connector',	 'Fast Connector', 'OTDR Launch Cable' ],
  'Passive Components': [ 'PLC Splitter', 'FBT Coupler', 'Attenuators', 'Optical Switches', 'WDM Filters' ]
};


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
    await Category.sync({ force: true })
    await Subcategory.sync({ force: true })

    // create mock data
    await User.create({
      username: 'edguan',
      password: '123456'
    })
    await User.create({
      username: 'sandy',
      password: '12345',
      is_deleted: true
    })

    for(let key in mockCate) {
      let category = await Category.create({ name: key })
      mockCate[key].forEach( async v => await Subcategory.create({ name: v, category_id: category.id }))
    }

    console.log('sync mysql success')
  } catch (err) {
    console.log(err)
  }
})()