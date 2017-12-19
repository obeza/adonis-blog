'use strict'

const randtoken = require('rand-token');
const Mail = use('Mail')

const Role = use('App/Models/Role')
const Invitation = use('App/Models/Invitation')

class InvitationController {
  async index({ view }) {

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

    // générer le token
    let token = randtoken.generate(250)
    
    // save in db
    let data = request.only(['email', 'roles_id'])
    data.token = token
    let invitation = await Invitation.create(data)

    // envoyer le mail d'invitation
    /* await Mail.send('pages.backoffice.invitation.email', invitation.toJSON(), (message) => {
      message
        .to(invitation.email)
        .from('info@memundo.com')
        .subject('Welcome to memundo backoffice')
    }) */

    // préparer le message pour la page liste invitation
    session.flash({ notification: 'You have been redirected back' })

    // renvoyer vers la page d'invitation
    response.route('InvitationController.index')

  }

  async show({ request, session, response }) {

  }

  async edit({ view, params }) {

      return params.id

  }

  async update() {}

  async destroy({ params, session, response }) {
    const invitation = await Invitation.find(params.id)
    await invitation.delete()

    session.flash({ notification: 'Task deleted!' })
    return response.redirect('/backoffice/invitation')
  }
}

module.exports = InvitationController
