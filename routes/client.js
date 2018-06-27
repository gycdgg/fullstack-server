import Router from 'koa-router'

// const home = new Home()
const router = Router()

router.post('/login', async (ctx, next) => {
  ctx.body = {
    test: 'test1111111'
  }
})
/**
 * get homepage resourse
 */
// router.get('/home', home.test)

export default router