'use strict'

const Role = use('App/Models/Role')
const User = use('App/Models/User')

class UserController {

  // list user
  async index ( {view} ) {
    return view.render('pages.backoffice.user.index')
  }

  async create ( { view } ) {
    let roles = await Role.all()
    
    return view.render('pages.backoffice.user.form', {
      roles: roles.toJSON()
    })

  }

  async store ({ request, session, response }) {

/*     let user = new User()
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
