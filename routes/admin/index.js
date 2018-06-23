import Router from 'koa-router'
import multiparty from 'koa2-multiparty'
import path from 'path'
import fs from 'fs'
const router = Router()

router.post('/login', async (ctx) => {
  ctx.body = {
    test: 'test1111111'
  }
})
/**
 * check login status and get user info
 */
router.get('/session', async (ctx) => {
  console.log(ctx.headers, '1111111111111111111')
  ctx.body = {
    text: 'welcome'
  }
})

router.post('/imgs', multiparty(), async (ctx) => {
  try{

    let filename = ctx.req.files.file.originalFilename || path.basename(ctx.req.files.file.path)
    let targetPath = `./static/uploads/${filename}`
    await fs.createReadStream(ctx.req.files.file.path).pipe(fs.createWriteStream(targetPath))
    console.log('post img api', ctx.req.files, ctx.headers,ctx.req)
    ctx.body = {
      url: `http://${ctx.headers.origin}/static/uploads/${filename}`
    }
  }catch(error) {
    console.log('error', error)
  }
})

export default router