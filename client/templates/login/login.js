import { Template } from 'meteor/templating'
import { ReactiveVar } from 'meteor/reactive-var'

Template.login.onCreated(System.loginOnCreated)
Template.login.helpers(System.loginHelpers)
Template.login.events(System.loginEvents)
