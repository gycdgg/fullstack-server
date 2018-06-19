import Koa from 'koa'
import http from 'http'
import convert from 'koa-convert'
import logger from 'koa-logger'
import cors from 'koa-cors'
import bodyParser from 'koa-bodyparser'
import onerror from 'koa-onerror'
import resource from 'koa-static'
import path from 'path'
import Router from 'koa-router'
const router = Router()
let app = new Koa()

onerror(app)

app.proxy = true

app
	.use(convert(cors()))
	.use(convert(logger()))
	.use(bodyParser())
	.use(async (ctx, next) => {
		await next()
		ctx.set('X-Powered-By', 'Koa2')
	})
	.use(async (ctx, next) => {
		const start = new Date()
		await next()
		const ms = new Date() - start
		console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
	})
router.use('/',index.routes())
app.on('error', (error, ctx) => {
		console.log('奇怪的错误' + JSON.stringify(ctx.onerror))
		console.log('server error:' + error)
	})

export default app