getUserLanguage = function () {
  // Put here the logic for determining the user language
  return 'br'
}

if (Meteor.isClient) {
  Meteor.startup(function () {
    TAPi18n.setLanguage(getUserLanguage())
      .done(function () {
        // here the logic when set language
      })
      .fail(function (error_message) {
        // Handle the error situation
      })
  })
}
