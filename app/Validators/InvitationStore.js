'use strict'

class InvitationStore {
  get rules () {
    return {
      email: 'required|email',
      roles_id: 'required'
    }
  }
}
//, |unique:invitations,email
module.exports = InvitationStore
