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
   * delete and the create
   * @param {*} ctx
   * @returns data
   * @memberof PictureController
   */
  async create(ctx) {
    const { fileList, category } = ctx.request.body
    await Picture.destroy({
      where: { category }
    })
    return Picture.bulkCreate(fileList)
  }
}

export default new PictureController