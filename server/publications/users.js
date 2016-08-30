import { Meteor } from 'meteor/meteor'

Meteor.publish('usersThatAreNotVerified', function () {
  return Meteor.users.find({}, { fields: { emails: 1, profile: 1, createdAt: 1 } })
})
