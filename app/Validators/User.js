'use strict'

class User {
  get rules () {
    return {
      firstname: 'required',
      lastname: 'required',
      password  : 'required|min:6|max:30',
      password_confirm: 'same:password'
    }
  }
}
//, |unique:invitations,email
module.exports = User
