'use strict'

const Schema = use('Schema')

class InvitationSchema extends Schema {
  up() {
    this.create('invitations', (table) => {
      table.increments()
      table.string('email', 60).notNullable().unique()
      table.integer('roles_id').notNullable()
      table.string('token', 254).notNullable().unique()
      table.timestamps()
    })
  }

  down() {
    this.drop('invitations')
  }
}

module.exports = InvitationSchema
