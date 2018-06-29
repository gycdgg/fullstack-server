import { verifyToken } from '../util'
/**
 * normalize response
 * for admin api, should be authed
 * @param {function} fn
 * @return {function} asnyc
 */
const normalizeResponse = (fn) => async (ctx, next) => {
  if(ctx.path.includes('/admin')) {
    if(!(ctx.session && ctx.session.id)) {
      ctx.status = 403
      ctx.body = {
        name: 'unauthortized',
        message: 'user or client unauthortized'
      }
    }
  }
  try{
    await fn(ctx, next)
  }catch(e) {
    ctx.status = 500
    ctx.body = {
      name: 'Server error',
      message: 'An Unexpected condition was encountered in the server and no more specific message is suitable'
    }
    console.log(e)
  }
}

/**
 * set ctx.decoded while admin user login
 * @param {function} fn
 * @return {function} asnyc
 */
const checkAuth = () => async (ctx, next) => {
  try{

    console.log('1111111111111111111111')
    let { user_id: id } = await verifyToken(ctx)
    console.log(id)
    if(id) {
      ctx.session = {}
      ctx.session.id = id
    }
  } catch(err) {
    console.log('err', err)
  }
  await next()
}
export  { normalizeResponse, checkAuth }