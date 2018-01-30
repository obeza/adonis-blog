'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {
  up() {
    this.create('users', table => {
      table.increments()
      table.string('firstname').notNullable().unique()
      table.string('lastname').notNullable().unique()
      table.string('email').notNullable().unique()
      table.string('password').notNullable()
      table.integer('roles_id').notNullable()
      table.integer('status').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('users')
  }
}

module.exports = UserSchema
