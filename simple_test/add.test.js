var webdriver = require('selenium-webdriver'),
{ describe, it, after, before } = require('selenium-webdriver/testing'),
assert = require('assert'),
By = webdriver.By,
until = webdriver.until;
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;

var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

var driver = new webdriver.Builder()
.withCapabilities(webdriver.Capabilities.chrome())
.build();

driver.get('https://fs-intern-calendar.herokuapp.com');
driver.findElement(By.css('#user_email')).sendKeys('vi@g.com');
driver.findElement(By.css('#user_password')).sendKeys('123456');
driver.findElement(By.css('.button.success')).click();
driver.sleep(1000);
driver.findElement(By.linkText('new event')).click();
driver.sleep(1000);
driver.findElement(By.css('#event_name')).sendKeys('123456');
driver.findElement(By.css('.button')).click();
driver.sleep(1000);
driver.quit();