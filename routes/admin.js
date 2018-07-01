import Router from 'koa-router'
import multiparty from 'koa2-multiparty'
import path from 'path'
import fs from 'fs'
import { normalizeResponse } from '../middleware'
import userController from '../controller/user'
const router = Router()

/**
 * check login status and get user info
 * get: check session
 * post: admin user login
 * put: update admin user
 * delete: log out
 */
router.get('/session', normalizeResponse(userController._get))
router.post('/session', userController.post)
router.put('/session', normalizeResponse(userController.put))
router.delete('/session', normalizeResponse(userController._delete))

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