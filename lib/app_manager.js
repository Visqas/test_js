var Page = require('./base_page');

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

module.exports = Page;