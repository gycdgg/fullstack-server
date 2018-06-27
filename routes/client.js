import Router from 'koa-router'
import { normalizeResponse } from '../middleware/index'
import home from '../controller/home'
const router = Router()

router.get('/home', home._get)
/**
 * check login status and get user info
 */
// router.get('/home', home.test)

export default router