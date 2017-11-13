var { describe, it, after, before } = require('selenium-webdriver/testing');
var Page = require('../lib/base_page');
var page;

describe('lirary app scenarios', function(){
    this.timeout(5000);

    beforeEach(function() {
        page = new Page();
        page.driver.manage().window().setPosition(0, -600);
        page.visit('https://fs-intern-calendar.herokuapp.com')
    });

    afterEach(function() {
        page.quit();
    });
})
