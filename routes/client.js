import Router from 'koa-router'
import fs from 'fs'
import multiparty from 'koa2-multiparty'
import home from '../controller/home'
import quoteController from '../controller/quote'
const router = Router()

router.get('/home', home._get)


router.post('/quote', quoteController.create)

router.post('/upload', multiparty(), async (ctx) => {
  try{
    let filename = ctx.req.files.file.originalFilename || path.basename(ctx.req.files.file.path)
    let targetPath = `./static/uploads/client/${filename}`
    await fs.createReadStream(ctx.req.files.file.path).pipe(fs.createWriteStream(targetPath))
    console.log('post img api', ctx.req.files, ctx.headers, ctx.req)
    ctx.body = {
      url: `${ctx.headers.origin}/static/uploads/${filename}`
    }
  }catch(error) {
    console.log('error', error)
  }
})
export default router