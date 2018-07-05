import { Picture } from '../models'

class PictureController {
  
  async _get(ctx) {
    const { category } = ctx.query
    let pictures = await Picture.findAndCount({
      where: { category }
    })
    ctx.status = 200
    ctx.body = {
      data: pictures,
      message: 'Success'
    }
  }

  /**
   *
   * delete first and then create
   * @param {*} ctx
   * @returns data
   * @memberof PictureController
   */
  async create(ctx) {
    const { fileList, category } = ctx.request.body
    if(Array.isArray(fileList)) {
      await Picture.destroy({
        where: { category }
      })
      return Picture.bulkCreate(fileList)
    } else {
      return Picture.create(fileList)
    }
  }
  
  async update(ctx) {
    const { body } = ctx.request
    console.log(body)
    return Picture.update({ 
      title: body.title,
      url: body.url,
      name: body.name,
      uid: body.uid
    }, {
      where: { id: body.id }
    })
  }
}

export default new PictureController