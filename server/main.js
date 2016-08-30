// add params to user while create
Accounts.onCreateUser(function (options, user) {
  for (var i in options)
    user[i] = options[i]

  return user
})
