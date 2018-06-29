import Router from 'koa-router'
import { checkAuth } from '../middleware'
import admin from './admin'
import client from './client'

const router = Router()

/**
 * varify token while call admin api
 * @Todo virify token
 */
router.use('/api/admin', checkAuth(), admin.routes())

/**
 * client api entry
 */
router.use('/api/client', client.routes())

export default router