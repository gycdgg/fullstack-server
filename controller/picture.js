import { Picture } from '../models'

class PictureController {
  
  async _get(ctx) {
    const { category } = ctx.query
    let pictures = await Picture.findAll({
      where: { category }
    })
    ctx.status = 200
    ctx.body = {
      data: pictures,
      message: 'Success'
    }
  }

  async create(ctx) {
    const fileList = ctx.request.body
    return Picture.bulkCreate(fileList)
  }
}

export default new PictureController