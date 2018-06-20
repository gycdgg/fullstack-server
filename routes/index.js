import Router from 'koa-router'
import admin from './admin'
import client from './client'
const router = Router()

router.use('/api/admin',admin.routes())

router.use('/api/client',client.routes())

export default router