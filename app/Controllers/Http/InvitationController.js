'use strict'

const randtoken = require('rand-token');
const Mail = use('Mail')

const Role = use('App/Models/Role')
const Invitation = use('App/Models/Invitation')
const { validate } = use('Validator')

class InvitationController {
  async index({ view, session }) {
    
    // call invitations rom db
    let invitations = await Invitation.all()

    return view.render('pages.backoffice.invitation.index', {
      invitations : invitations.toJSON()
    })
  }

  async create({ view }) {

    let roles = await Role.all()

    return view.render('pages.backoffice.invitation.form', {
      roles: roles.toJSON()
    })

  }

  async store({ request, session, response }) {

/*     const rules = { 
      email: 'required|email|unique:email',
      roles_id: 'required' 
    }
    const validation = await validate(request.all(), rules)

    if (validation.fails()) {
      session.withErrors(validation.messages()).flashAll()
      return response.redirect('back')
    } */

    // générer le token
    let token = randtoken.generate(250)
    
    // save in db
    let data = request.only(['email', 'roles_id'])
    data.token = token
    // let invitation = await Invitation.create(data)

    // envoyer le mail d'invitation
/*     await Mail.send('pages.backoffice.invitation.email', invitation.toJSON(), (message) => {
      message
        .to(invitation.email)
        .from('info@memundo.com')
        .subject('Welcome to memundo backoffice')
    }) */

    // préparer le message pour la page liste invitation
    session.flash({ notification: 'You have been redirected back' })
/*     session.flash({ 
      alert: {
        title : "test",
        msg : "L'invitation a été envoyée.",
        style : "alert-danger"
      }
    }) */

    // renvoyer vers la page d'invitation
    //response.route('InvitationController.index')
    response.redirect('/backoffice/invitation')
  }

  async show({ request, session, response }) {

  }

  async edit({ view, params }) {}

  async update() {}

  async destroy({ params, session, response }) {
    const invitation = await Invitation.find(params.id)
    await invitation.delete()

    session.flash({ notification: "l'invitation a été supprimée." })
    return response.redirect('/backoffice/invitation')
  }

}

module.exports = InvitationController
