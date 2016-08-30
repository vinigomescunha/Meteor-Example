import { Template } from 'meteor/templating'

Template.main.onRendered(System.mainOnRendered)
Template.main.helpers(System.mainHelpers)
