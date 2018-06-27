export default class Home {
  async _get() {
    ctx.status = 200
    ctx.body = {
      message: 'get home page data',
      data: 'home page content'
    }
  }

  async post() {
    ctx.status = 200
    ctx.body = {
      message: 'post home page data',
      data: 'post home page content'
    }
  }

  async put() {
    ctx.status = 200
    ctx.body = {
      message: 'post home page data',
      data: 'post home page content'
    }
  }

  async delete() {
    ctx.status = 200
    ctx.body = {
      message: 'post home page data',
      data: 'post home page content'
    }
  }
}