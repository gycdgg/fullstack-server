import { Picture } from '../models'

class PictureController {
  async _get(ctx) {
    const { category } = ctx.query
    return Picture.findAll({
      where: { category }
    })
  }
}

export default new PictureController