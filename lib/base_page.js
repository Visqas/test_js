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

    this.findBtn = function(el) { 
        driver.wait(until.elementLocated(By.linkText(el)), 5000);
        return driver.findElement(By.linkText(el));
    }

    this.write = function(el, txt) {
        return this.find(el).sendKeys(txt);
    }
}

module.exports = Page;