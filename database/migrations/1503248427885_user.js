'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {
  up() {
    this.create('users', table => {
      table.increments()
      table.string('firstname', 32).notNullable().unique()
      table.string('lastname', 32).notNullable().unique()
      table.string('email', 32).notNullable().unique()
      table.string('password', 32).notNullable()
      table.integer('roles_id').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('users')
  }
}

module.exports = UserSchema
