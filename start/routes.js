'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/guides/routing
|
*/

const Route = use('Route')

Route.on('/').render('welcome')

Route.resource('/backoffice/user', 'UserController')
  .validator([[['/backoffice/user.store'], 'User']])
//.middleware(['auth'])

Route.resource('/backoffice/invitation', 'InvitationController')
  .validator([[['/backoffice/invitation.store'], 'InvitationStore']])
// une url pour gérer le delete avec get
Route.get('/backoffice/invitation/delete/:id', 'InvitationController.destroy')

// page de bienvenue pour le nouvel utilisateur
Route.get('welcome/:firstname', 'WelcomeController.index')

Route.get('/backoffice/login', 'AuthController.show')
Route.post('/backoffice/login', 'AuthController.check')