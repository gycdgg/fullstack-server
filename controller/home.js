class Home {
  async _get(ctx) {
    
    ctx.status = 200
    ctx.body = {
      message: 'Success',
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

export default new Home()