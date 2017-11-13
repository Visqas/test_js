var webdriver = require('selenium-webdriver'),
{ describe, it, after, before } = require('selenium-webdriver/testing'),
assert = require('assert'),
By = webdriver.By,
until = webdriver.until;
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;

var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);


describe('Calendar app scenarios', function(){
    this.timeout(50000);
   
    beforeEach(function(){
    driver = new webdriver.Builder().forBrowser('chrome').build();
        driver.get('https://fs-intern-calendar.herokuapp.com');
    });

    afterEach(function(){
        driver.quit();
    })

    it('User login and exit', function(){
        var submitBtn = driver.findElement(By.css('input'));
            driver.findElement(By.css('#user_email')).sendKeys('vi@g.com');
            driver.findElement(By.css('#user_password')).sendKeys('123456');
            driver.findElement(By.css('.button.success')).click();
            driver.sleep(2000);
            driver.findElement(By.linkText('exit')).click();
            driver.sleep(2000);
    });
});