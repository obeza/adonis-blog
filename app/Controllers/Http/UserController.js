'use strict'

const Role = use('App/Models/Role')
const User = use('App/Models/User')
const Invitation = use('App/Models/Invitation')

class UserController {

  // list user
  async index ( {view} ) {
    let users = await User.query().paginate(1, 10)

    return view.render('pages.backoffice.user.index', { 
      users : users.toJSON()
    })
  }

  async create ( { view, request } ) {
    let roles = await Role.all()
    
    let data = request.get()

    return view.render('pages.backoffice.user.form-create', { data })

  }

  async store ({ request, response }) {

    // recupérer le data du formulaire
    let data = request.only([ 'firstname', 'lastname', 'email', 'password' ])

    // récupérer le roles_id depuis la db invitations
    let token = request.post().token 
    let invitation = await Invitation.findBy('token', token)
    data.roles_id = invitation.roles_id

    // set status par defaut à 1 (pour activer)
    data.status = 1

    // creer le user avec le data
    let user = await User.create(data)

    // supprimer l'invitation qui correspond au token
    await Invitation.query().where( 'token', token ).delete()

    // afficher une page de bienvenue
    // je redirige vers un autre controller publique
    response.redirect('WelcomeController.index', { firstname: data.firstname })

  }

  async show ({ view, params }) {
    return "show"
  }

  async edit ({ view, params }) {
    let user = await User.all()
    return user

  }

  async update () {
  }

  async delete () {
  }
}

module.exports = UserController
