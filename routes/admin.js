import Router from 'koa-router'
import multiparty from 'koa2-multiparty'
import path from 'path'
import fs from 'fs'
import { normalizeResponse } from '../middleware'
import userController from '../controller/user'
const router = Router()

router.post('/login', userController.post)
/**
 * check login status and get user info
 */
router.get('/session', normalizeResponse(userController._get))

router.post('/imgs', multiparty(), async (ctx) => {
  try{

    let filename = ctx.req.files.file.originalFilename || path.basename(ctx.req.files.file.path)
    let targetPath = `./static/uploads/${filename}`
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