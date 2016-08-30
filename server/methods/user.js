Meteor.methods({
  newUser: function (user) {
    try {
      user = Accounts.createUser(user)
    } catch(e ) {
      throw new Meteor.Error(500, e.reason, e.reason)
    }

    if (user !== undefined) {
      return { status: 'success', id: user }
    }
  }

})
