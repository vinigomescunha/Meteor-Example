System = {
  // this object allow all subs
  subscribes: {},
  // this function allow Template register OnCreated
  registerOnCreated: function () {
    this.alert = new ReactiveVar()
  },
  // this object allow Template register helpers
  registerHelpers: {
    alert: function () {
      return Template.instance().alert.get()
    },
    fields: function () {
      return [
        {
          id: 'name',
          type: 'text',
          label: 'Type Your Name'
        },
        {
          id: 'email',
          type: 'email',
          label: 'Type Your Email'
        },
        {
          id: 'password',
          type: 'password',
          label: 'Type Your Password'
        }
      ]
    }
  },
  // this object allow Template register events
  registerEvents: {
    'submit #register-form': function (event, template) {
      event.preventDefault()
      user = {
        profile: {
          'name': template.$('#name').val()
        },
        password: template.$('#password').val(),
        email: template.$('#email').val()
      }

      Meteor.call('newUser', user, function (error, result) {
        if (!error && result['status'] === 'success')
          template.alert.set('Register Success')
        else
          template.alert.set('Register Error')

        Meteor.setTimeout(function () {
          template.find('form').reset()
          template.alert.set('')
        }, 3000)
      })
    }

  },
  // this function allow Template main onRendered
  mainOnRendered: function () {
    Meteor.subscribe('usersThatAreNotVerified')
  },
  // this function allow Template main helpers
  mainHelpers: {
    users: function () {
      return Meteor.users.find({}, { sort: { createdAt: -1 }})
    }

  },
  // this function allow Template login onCreated
  loginOnCreated: function () {
    this.alert = new ReactiveVar()
  },
  // this function allow Template login helpers
  loginHelpers: {
    alert: function () {
      return Template.instance().alert.get()
    },
    fields: function () {
      return [
        {
          id: 'email',
          type: 'email',
          label: 'Type Your Email'
        },
        {
          id: 'password',
          type: 'password',
          label: 'Type Your Password'
        }
      ]
    }
  },
  // this function allow Template login events
  loginEvents: {
    'submit #login-form': function (event, template) {
      event.preventDefault()

      Meteor.loginWithPassword(template.$('#email').val(), template.$('#password').val(), function (error, result) {
        if (!error && Meteor.userId())
          FlowRouter.go('Cards')
        else
          template.alert.set('Login Error')

        Meteor.setTimeout(function () {
          // prevent brute force client :p
          template.find('form').reset()
          template.alert.set('')
        }, 3000)
      })
    }

  },
  cardsOnCreated: function () {
    this.alert = new ReactiveVar()
  },
  cardsOnRendered: function () {
    Meteor.subscribe('allCards')
  },
  cardsHelpers: {
    alert: function () {
      return Template.instance().alert.get()
    },
    cards: function () {
      return Cards.find()
    },
    fields: function () {
      return [
        {
          id: 'name',
          type: 'text',
          label: 'Card Name'
        },
        {
          id: 'description',
          type: 'text',
          label: 'Card Description'
        }
      ]
    }
  },
  cardsEvents: {
    'submit #cards-form': function (event, template) {
      event.preventDefault()

      card = {
        uid: Meteor.userId(),
        name: template.$('#name').val(),
        description: template.$('#description').val()
      }

      Cards.insert(card , function (error, result) {
        if (!error)
          template.alert.set('Card Added')
        else
          template.alert.set('Card Error')

        template.find('form').reset()
        Meteor.setTimeout(function () {
          template.alert.set('')
        }, 3000)
      })
    }
  }

}
