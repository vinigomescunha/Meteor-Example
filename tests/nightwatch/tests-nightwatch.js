module.exports = {
  'Form Register and Login': function (browser) {
    tt = new Date().getTime()
    browser
      .resizeWindow(1400, 800)
      .url('http://localhost:5001')
    // register
    browser
      .waitForElementVisible('#register-form', 1000)
      .assert.visible('input#register-name')
      .setValue('input#register-name', 'Teste123')
      .assert.visible('input#register-email')
      .setValue('input#register-email', 'test' + tt + '@mailinator.com')
      .assert.visible('input#register-password')
      .setValue('input#register-password', tt)
      .submitForm('#register-form')
      .pause(5000)

    browser
      .waitForElementVisible('#login-form', 1000)
      .assert.visible('input#login-email')
      .setValue('input#login-email', 'test' + tt + '@mailinator.com')
      .assert.visible('input#login-password')
      .setValue('input#login-password', tt)
      .submitForm('#login-form')
      .pause(5000)
      .assert.urlEquals('http://localhost:5001/cards')
  },
  'Add Cards': function (browser) {
    browser
      .waitForElementVisible('#cards-form', 1000)
      .assert.visible('input#name')
      .setValue('input#name', 'this is a card')
      .assert.visible('input#description')
      .setValue('input#description', 'This is a description from a card : ' + new Date().getTime())
      .submitForm('#cards-form')
      .pause(5000)
  }
}
