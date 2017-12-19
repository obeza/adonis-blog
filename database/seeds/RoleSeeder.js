'use strict'

/*
|--------------------------------------------------------------------------
| RoleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/
const Database = use('Database')
const Factory = use('Factory')

class RoleSeeder {
  async run() {
    const users = await Database.table('roles')
    const user = await Factory.model('App/Models/Role').create({
      role: 'user'
    })
    const admin = await Factory.model('App/Models/Role').create({
      role: 'admin'
    })
    const superuser = await Factory.model('App/Models/Role').create({
      role: 'superuser'
    })
  }
}

module.exports = RoleSeeder
