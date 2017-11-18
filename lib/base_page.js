var webdriver = require('selenium-webdriver'),
{ describe, it, after, before } = require('selenium-webdriver/testing'),
assert = require('assert'),
By = webdriver.By,
until = webdriver.until;
chrome = require('selenium-webdriver/chrome');
o = new chrome.Options();
o.addArguments('disable-infobars');
var path = require('chromedriver').path;

var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

var driver = new webdriver.Builder()
.withCapabilities(webdriver.Capabilities.chrome())
.build();



    var Page = function() {
        this.driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).setChromeOptions(o).build();
        var driver = this.driver;

    this.visit = function(theUrl) {
        return driver.get(theUrl);
    }

    this.quit = function() {
        return driver.quit();
    }

    this.find = function(el) { 
        driver.wait(until.elementLocated(By.css(el)), 5000);
        return driver.findElement(By.css(el));
    }

    this.write = function(el, txt) {
        return this.find(el).sendKeys(txt);
    }

    this.sleep = function(el) {
        return driver.sleep(2000);
    }
}

Page.prototype.loginBtn = function(){
    this.write('#user_email', 'vi@g.com');
    this.write('#user_password', '123456');
    return{
        opacity: this.find('.button.success').getCssValue('opacity'),
        state: this.find('.button.success').isEnabled()
    }
}

Page.prototype.clickSubmit = function(){
    return this.find('.button.success').click();
}

Page.prototype.newPost = function(){
    return this.find('.top-bar-right > ul > div > li:nth-child(4) > a').click();
}

Page.prototype.enterEventName = function(){
    this.write('#event_name', '123456');
    return{
        opacity: this.find('.button').getCssValue('opacity'),
        state: this.find('.button').isEnabled()
    }
}

Page.prototype.changePost = function(){
    return this.find('.button.medium.success').click();
}

Page.prototype.changeEvent = function(){
    this.write('#event_description', 'opisanie tut');
    return{
        opacity: this.find('.button').getCssValue('opacity'),
        state: this.find('.button').isEnabled()
    }
}

Page.prototype.removeEvent = function(){
    return this.find('div:nth-child(5) > li:nth-child(2) > a').click();
}

Page.prototype.alertSuccess = function(){
    this.loginBtn();
    this.clickSubmit();
    return this.find('.button.success').getText();
}

Page.prototype.getOut = function(){
    this.find('div > li:nth-child(5) > a').click();
}

module.exports = Page;