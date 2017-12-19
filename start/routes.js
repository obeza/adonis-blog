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
//.middleware(['auth'])

Route.resource('/backoffice/invitation', 'InvitationController')
  .validator([[['/backoffice/invitation.store'], 'InvitationStore']])
