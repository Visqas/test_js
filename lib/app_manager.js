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
    return this.findBtn('new event').click();
}

Page.prototype.addBtn = function(){
    this.write('#event_name', '123456');
    return{
        opacity: this.find('.button').getCssValue('opacity'),
        state: this.find('.button').isEnabled()
    }
}


Page.prototype.alertSuccess = function(){
    this.loginBtn();
    this.clickSubmit();
    return this.find('.button.success').getText();
}

module.exports = Page;