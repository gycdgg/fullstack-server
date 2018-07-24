import { Product } from '../models'



Array.prototype.deepincludes = function (str) {
  if(this.includes(str)) return true
  return this.some((v) => v.includes(str))
}

class Category {
  async _get() {
    let categoryArr = []
    const products = await Product.findAll({
      where: { is_deleted: false },
      attributes: [ 'category', 'name' ]
    })
    products.forEach( v => {
      if(categoryArr.deepincludes(v.category)) {
        let index = categoryArr.findIndex(_v => _v[0] === v.category)
        console.log(index)
        categoryArr[index].push(v.name)
      }else {
        categoryArr.push([ v.category ])
      }
    })
    return categoryArr
  }
}


export default new Category