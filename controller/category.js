import { Category, Subcategory } from '../models'

class CategoryController {
  async _get() {
    return Category.findAll({
      include: [{ model: Subcategory, as: 'subcategorys', attributes: [ 'id', 'name' ] }],
      attributes: [ 'id', 'name' ]
    })
  }
}


export default new CategoryController