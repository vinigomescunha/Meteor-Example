const tt = new Date().getTime()

describe('Chimp Mocha - Example', function () {
  // function get page title
  describe('1 - Page Register Form', function () {
    it('Here i make register any user @watch', function () {
      browser.url('http://localhost:5001')

      expect(browser.getTitle()).to.equal('The Website Example')

      browser.setValue('#register-email', 'test' + tt + '@mailinator.com')
        .setValue('#register-password', 'password')
        .setValue('#register-name', 'Any Name - ' + tt)
      browser.submitForm('#register-form')
        .pause(1000)
    })
  })

  describe('2 - Page Login Form', function () {
    it('Here i make login any user @watch', function () {
      expect(browser.getTitle()).to.equal('The Website Example')

      browser.setValue('#login-email', 'test' + tt + '@mailinator.com')
        .setValue('#login-password', 'password')
      // submit form 
      browser.submitForm('#login-form')
        .pause(1000)
    })
  })

  describe('3 - Card add - Sample', function () {
    it('Add card sample @watch', function () {
      expect(browser.getTitle()).to.equal('The Website Example')

      browser.setValue('#name', 'test' + tt + '@mailinator.com')
        .setValue('#description', 'password')
      // submit form 
      browser.submitForm('#cards-form')
        .pause(1000)
    })
  })
})
