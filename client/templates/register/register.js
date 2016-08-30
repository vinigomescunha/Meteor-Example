import { Template } from 'meteor/templating'
import { ReactiveVar } from 'meteor/reactive-var'

Template.register.onCreated(System.registerOnCreated)
Template.register.helpers(System.registerHelpers)
Template.register.events(System.registerEvents)
