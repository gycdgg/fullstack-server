import { User } from '../models'
import { signToken } from '../util'

class UserController {
  async _get(ctx) {
    const userInfo = await User.findById(ctx.session.id)
    ctx.body = {
      message: 'Success',
      data: userInfo
    }
  }

  async post(ctx) {
    const { userName: username, password } = ctx.request.body
    console.log(username, password, ctx.request)
    const user = await User.findOne({
      where: {
        username, password
      }
    })
    // if user found, sign token and set cookie to browser
    try{      
      if(user) {
        const { token, expiresIn } = signToken(user)
        ctx.cookies.set('user_id', token, {
          overwrite: true,
          maxAge: expiresIn
        })
        ctx.status = 200
        ctx.body = {
          data: user,
          message: 'Success'
        }
      } else {
        ctx.status = 403
        ctx.body = {
          message: 'Failure'
        }
      }
    }catch(err) {
      console.log('err', err)
    }
  }
}

export default new UserController()