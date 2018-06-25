import Router from 'koa-router'
import Home from './home'

const home = new Home()
const router = Router()

router.post('/login', async (ctx, next) => {
  ctx.body = {
    test: 'test1111111'
  }
})
/**
 * get homepage resourse
 */
router.get('/home', home.get)

export default router