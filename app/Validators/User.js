'use strict'

class User {
  get rules () {
    return {
      firstname: 'required',
      lastname: 'required',
      password  : 'required|min:8|max:30',
      password_confirm: 'same:password',
      token: 'exists:invitations,token',
      email: 'exists:invitations,email'
    }
  }
}
//, |unique:invitations,email
module.exports = User
