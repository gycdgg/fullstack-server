import Router from 'koa-router'
import multiparty from 'koa2-multiparty'
import path from 'path'
import fs from 'fs'
import { normalizeResponse } from '../middleware'
import userController from '../controller/user'
import pictureController from '../controller/picture'
import productController from '../controller/product'
import quoteController from '../controller/quote'

const router = Router()

/**
 * check login status and get user info
 * get: check session
 * post: admin user login
 * put: update admin user
 * delete: log out
 */
router.get('/session', normalizeResponse(userController._get))
router.post('/session', userController.create)
router.put('/session', normalizeResponse(userController.update))
router.delete('/session', normalizeResponse(userController._delete))

router.get('/pictures', pictureController._get)
router.post('/pictures', normalizeResponse(pictureController.create))
router.put('/pictures', normalizeResponse(pictureController.update))


router.get('/quote', normalizeResponse(quoteController._get))

router.get('/products/:id?', normalizeResponse(productController._get, true))
//router.post('/products', productController.create)
/**
 * @todo name is configable
 */
router.post('/upload', multiparty(), async (ctx) => {
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