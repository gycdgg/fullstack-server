/**
 * normalize response
 * for admin api, should be authed
 * @todo varify token first
 * @param {function} fn
 * @return {function} asnyc
 */
const normalizeResponse = (fn) => async (ctx, next) => {
  if(ctx.path.includes('/admin')) {
    if(!(ctx.session && ctx.session.user && ctx.session.user.id)) {
      ctx.status = 404
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

export  { normalizeResponse }