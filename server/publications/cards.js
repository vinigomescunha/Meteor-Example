import { Meteor } from 'meteor/meteor'

Meteor.publish('allCards', function () {
  return Cards.find({})
})
