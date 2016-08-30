FlowRouter.route('/', {
  name: 'Main',
  action: function (params, queryParams) {
    if (Meteor.userId())
      FlowRouter.go('Cards')

    BlazeLayout.render('mainLayout', {content: 'main'})
  }
})

FlowRouter.route('/logout', {
  name: 'Logout',
  action: function (params, queryParams) {
    Meteor.logout(function () {
      FlowRouter.go('Main')
    })
  }
})

loggedRoute = FlowRouter.group({
  // route to login if is root path(Login path) and exist user then redirect to any logged page
  name: 'logged',
  triggersEnter: [function (context, redirect) {
    if (!Meteor.userId())
      FlowRouter.go('Main')
  }]

})

loggedRoute.route('/cards', {
  name: 'Cards',
  action: function (params, queryParams) {
    BlazeLayout.render('mainLayout', {content: 'cards'})
  }
})
