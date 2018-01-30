'use strict'

class InvitationStore {
  get rules () {
    return {
      email: 'required|email|unique:invitations,email',
      roles_id: 'required'
    }
  }
}

module.exports = InvitationStore

/*
  |unique:invitations,email
  "invitations" est la table que l'on veut tester
  "email" est la colonne que l'on veut tester
*/