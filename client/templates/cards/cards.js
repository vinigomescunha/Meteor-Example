import { Template } from 'meteor/templating'
import { ReactiveVar } from 'meteor/reactive-var'

Template.cards.onCreated(System.cardsOnCreated)
Template.cards.onRendered(System.cardsOnRendered)
Template.cards.helpers(System.cardsHelpers)
Template.cards.events(System.cardsEvents)
