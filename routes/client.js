import Router from 'koa-router'
import home from '../controller/home'
const router = Router()

router.get('/home', home._get)
/**
 * check login status and get user info
 */
// router.get('/home', home.test)

export default router