import Router from 'koa-router'
const router = Router()

router.post('/login', async (ctx, next) => {
  ctx.body = {
    test: 'test1111111'
  }
})
/**
 * check login status and get user info
 */
router.get('/session', async (ctx, next) => {
  ctx.body = {
    text: 'welcome'
  }
})

export default router