import { Quote, Quote_file } from '../models'
import orm from '../models/Sequelize'
class QuoteController {
  
  async _get() {
    return Quote.findAndCountAll({
      where: { is_deleted: false },
      attributes: { exclude: [ 'updatedAt' ] },
      include: [
        { model: Quote_file, as: 'files', where: { is_deleted: false, status: 'done' }, attributes: [ 'name', 'url', 'uid' ] },
      ]
    })
  }

  async create(ctx) {
    const t = await orm.transaction()
    try{
      const { first_name, last_name, email, phone, country, company, product_detail, upload } = ctx.request.body
      const quote = await Quote.create({
        first_name, last_name, email, phone, country, company, product_detail
      }, { transaction: t })
      const _upload = upload.map(v => {
        v.quote_id = quote.id
        return v
      })
      await Quote_file.bulkCreate(_upload, {
        fields: [ 'uid', 'status', 'url',  'quote_id', 'name' ],
        transaction: t
      })
      await t.commit()
      ctx.status = 200
      ctx.body = {
        message: 'Success'
      }
    } catch(err) {
      await t.rollback()
      ctx.status = 500
      ctx.body = {
        name: 'Server error',
        message: 'An Unexpected condition was encountered in the server and no more specific message is suitable'
      }
      console.log(err)
    }
  }
  
  async update(ctx) {
    const { body } = ctx.request
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

export default new QuoteController