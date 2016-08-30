import { Mongo } from 'meteor/mongo'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'

Cards = new Mongo.Collection('cards')

Schema = {}

Schema.cards = new SimpleSchema({
  name: {
    type: String,
    optional: false
  },
  description: {
    type: String,
    optional: false
  }
})

Schema.users = new SimpleSchema({
  emails: {
    type: Array,
    optional: false
  },
  'emails.$': {
    type: Object
  },
  'emails.$.address': {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  'emails.$.verified': {
    type: Boolean
  },
  createdAt: {
    type: Date
  },
  // profile data 
  profile: {
    type: new SimpleSchema({
      'name': {
        type: String,
        optional: false
      }
    }),
    optional: false // optional dont force schema user has need during creation
  },
  // if use services account meteor-useraccounts
  services: {
    type: Object,
    optional: true,
    blackbox: true
  },
  // identify user in the system
  roles: {
    type: [ String ],
    allowedValues: [ 'Admin' , 'User' ],
    optional: true
  }
})

Cards.attachSchema(Schema.cards)
Meteor.users.attachSchema(Schema.users)
