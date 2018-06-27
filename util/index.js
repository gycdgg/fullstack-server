import jwt from 'jsonwebtoken'

const config = {
  secret: 'edguan',
  timeout: 1200000
}

/**
 * Create token
 * @param {Object} user 
 * @return {Object} token and expire time in millisecond 
 */
const signToken = (user) => {
  const token = jwt.sign({
    use_id: user.id
  }, config.secret, {
    expiresIn: config.timeout
  })
  console.log(11111)
  return {
    token,
    expiresIn: config.timeout
  }
}

/**
 * Check and get token if exist
 * @param {Object} ctx 
 * @return {String} user ide
 */
const verifyToken = async (ctx) => {
  const user_id = await ctx.cookies.get('user_id')

  if (user_id) {
    return jwt.verify(user_id, config.secret)
  }
}
/**
 * normalize response
 * @param {function} fn
 * @return {function} asnyc
 */
createMiddleWare = (fn) => async (ctx, next) => {
  if(!(ctx.session && ctx.session.user && ctx.session.user.id)) {
    ctx.status = 404
    ctx.body = {
      name: 'unauthortized',
      message: 'user or client unauthortized'
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
export {
  signToken,
  verifyToken 
}