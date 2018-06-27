import Router from 'koa-router'

// const home = new Home()
const router = Router()

router.post('/login', async (ctx) => {
  ctx.body = {
    test: 'test1111111'
  }
})
/**
 * check login status and get user info
 */
// router.get('/home', home.test)

export default router