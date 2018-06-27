import Router from 'koa-router'
import admin from './admin'
import client from './client'
const router = Router()

/**
 * varify token while call admin api
 * @Todo virify token
 */
router.use('/api/admin', async (ctx, next) => {
  await next()
}, admin.routes())

/**
 * client api entry
 */
router.use('/api/client', client.routes())

export default router