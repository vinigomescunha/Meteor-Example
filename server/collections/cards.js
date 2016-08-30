Cards.allow({
  insert: function (userId, doc) {
    if (userId)
      return true
    return false
  },
  update: function (userId, doc, fieldNames, modifier) {
    if (userId !== undefined)
      return true
    return false
  },
  remove: function (userId, doc) {
    return false
  }

})

Cards.deny({
  insert: function (userId, doc) {
    if (userId !== undefined)
      return false
    return true
  },
  update: function (userId, doc, fieldNames, modifier) {
    if (userId !== undefined)
      return false
    return true
  },
  remove: function (userId, doc) {
    return true
  }

})
