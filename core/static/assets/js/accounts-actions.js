"use strict";

var log = console.log;
var twitter_login_url = '';

var add_twitter_accounts = function(form) {
  $.ajax({
    url: twitter_login_url,
    data: $(form).serialize(),
    type: 'POST',
    error: function(result){
        log(result);
    },
    success: function(result){
        log(result);
        window.location = '';
    },
    timeout: 60000 // sets timeout to 3 seconds
});
};