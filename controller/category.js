import { Product } from '../models'



Array.prototype.deepincludes = function (str) {
  if(this.includes(str)) return true
  return this.some((v) => v.includes(str))
}

class Category {
  async _get() {
    let categoryArr = []
    let container = [ 'Optical Transceivers' ]
    const cateFilter = [ 'SFP Transceivers', 'SFP+ Transceivers', 'XFP Transceivers', '25G/40G/100G Transceivers' ]
    const products = await Product.findAll({
      where: { is_deleted: false },
      attributes: [ 'category', 'name' ]
    })
    products.forEach( v => {
      if(categoryArr.deepincludes(v.category)) {
        let index = categoryArr.findIndex(_v => _v[0] === v.category)
        categoryArr[index].push(v.name)
      }else {
        categoryArr.push([ v.category ])
      }
    })
    let _categoryArr = []
    categoryArr.forEach(v => {
      if(cateFilter.includes(v[0])) {
        container.push(v)
      } else {
        _categoryArr.push(v)
      }
    })

    _categoryArr.splice(1, 0, container)
    return _categoryArr
  }
}


export default new Category