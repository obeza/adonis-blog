'use strict'

class WelcomeController {

  async index( {view, params} ){
    // j'organise les infos en sortie dans un objet data
    let data = {
      firstname : params.firstname
    }
    return view.render('pages.backoffice.user.welcome', { data })
  }

}

module.exports = WelcomeController
