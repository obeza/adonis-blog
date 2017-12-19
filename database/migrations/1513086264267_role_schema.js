'use strict'

const Schema = use('Schema')

/*

Roles possibles

1 - user
2 - admin
3 - superadmin

voir seeds/RoleSeeder.js pour la création des roles

*/


class RoleSchema extends Schema {
  up() {
    this.create('roles', (table) => {
      table.increments()
      table.string('role', 60).notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('roles')
  }
}

module.exports = RoleSchema
