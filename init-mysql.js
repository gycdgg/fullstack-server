//import sequelize from './models/sequelize'
import { Picture, User, Product, Feature, Application, Package, Workshop, Quote, Quote_file, Product_pic } from './models'
const mockNavi = [
  [ 'xWDM & OADM', 'CWDM Mux/Demuxs', 'CWDM OADMs', 'DWDM Mux/Demuxs', 'DWDM OADMs', 'AAWG', 'CCWDM Modules', 'LAN WDM' ],
  [ 'Optical Transceivers', 
    [ 'SFP Transceivers', '1000BASE SFP', 'Copper SFP', 'BiDi SFP', 'CWDM SFP', 'DWDM SFP' ], 
    [ 'SFP+ Transceivers', '10G SFP+', 'BiDi SFP+', 'CWDM SFP+', 'DWDM SFP+' ], [ 'XFP Transceivers', '10G XFP', 'BiDi XFP', 'CWDM XFP', 'DWDM XFP' ], 
    [ '25G/40G/100G Transceivers', '25G SFP28', '40G QSFP+', '100G QSFP28', 'CFP/CFP2/CFP4/CXP' ]
  ],
  [ 'Active Optical Cables', '10G SFP+ AOC', '25G SFP28 AOC', '40G QSFP+ AOC', '56G QSFP+  AOC', '100G QSFP28 AOC' ],
  [ 'Direct Attach Cables', '10G SFP+  DAC', '25G SFP28 DAC', '40G QSFP+  DAC', '56G QSFP+  DAC', '100G QSFP28 DAC' ],
  [ 'MTP/MPO Fiber Cables', 'MPO Cables', 'MTP Cables', 'MTP/MPO Patch Panel', 'MTP/MPO Cassettes', 'MTP/MPO Loopbacks' ],
  [	'Fiber Patch Cables',	'Fiber Patch Cord', 'Pre-Terminated Patch Cords',	'Fiber Optic Pigtail', 'Fiber Optic Adapter',	'Fiber Optic Connector',	 'Fast Connector', 'OTDR Launch Cable'	],
  [ 'Passive Components', 'PLC Splitter', 'FBT Coupler', 'Attenuators', 'Optical Switches', 'WDM Filters' ],
  [ 'Optical Amplifiers', 'DWDM EDFA', 'Fixed Gain EDFA', 'CATV EDFA', 'Raman Amplifier', 'Dispersion Compensation' ]
];

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
    await User.create({
      username: 'edguan',
      password: '123456'
    })
    await User.create({
      username: 'sandy',
      password: '12345',
      is_deleted: true
    })
    mockNavi.forEach(async v => {
      if(v.some(_v => Array.isArray(_v))) {
        v.forEach(async (value, index) => {
          if(index > 0) {
            for(let i in value) {
              if(i > 0) {
                await Product.create({
                  name: value[i],
                  category: value[0]
                })
              }
            }
          }
        })
      } else {
        for(let i in v) {
          if(i > 0) {
            await Product.create({
              category: v[0],
              name: v[i]
            })
          }
        }
      }
    })

    console.log('sync mysql success')
  } catch (err) {
    console.log(err)
  }
})()