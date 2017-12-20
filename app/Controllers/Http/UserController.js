'use strict'

const Role = use('App/Models/Role')
const User = use('App/Models/User')

class UserController {

  // list user
  async index ( {view} ) {
    return view.render('pages.backoffice.user.index')
  }

  async create ( { view, request } ) {
    let roles = await Role.all()
    
    let data = request.get()

    return view.render('pages.backoffice.user.form-create', {
      token: data.token
    })

  }

  async store ({ request, session, response }) {

    /*  let user = new User()
    user.firstname = request.firstname
    user.lastname = request.lastname
    user.email = request.email
    user.email =  */

    return request.all()

  }

  async show () {
  }

  async edit () {
  }

  async update () {
  }

  async delete () {
  }
}

module.exports = UserController
