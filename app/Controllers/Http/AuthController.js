'use strict'

class AuthController {

  // afficher la page login
  async show({view}){
    return view.render('pages.backoffice.auth.login')
  }

  // via POST check si le user peut se connecter
  async check({ request, response, auth }){
    //return request.all()

    const { email, password } = request.all()
    await auth.attempt(email, password)

    return 'Logged in successfully'
  }

}

module.exports = AuthController
