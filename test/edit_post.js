var webdriver = require('selenium-webdriver'),
By = webdriver.By,
until = webdriver.until;
var { describe, it, after, before } = require('selenium-webdriver/testing');
var Page = require('../lib/base_page.js');
var page;


describe('Calendar app scenarios', function(){
    this.timeout(50000);
    
    beforeEach(function(){
        page = new Page();
        page.driver.manage().window().setPosition(0, -600);
        page.visit('https://fs-intern-calendar.herokuapp.com');
    });

    afterEach(function(){
        page.quit();
    });

    it('Change of post', function(){
        page.loginBtn();
        page.clickSubmit();
        page.sleep();
        page.newPost();
        page.sleep();
        page.enterEventName();            
        page.clickSubmit();
        page.sleep();
        page.changePost();
        page.changeEvent();
        page.clickSubmit();
        page.sleep();
        page.getOut();
        page.sleep();
    });
});