"use strict";

var log = console.log;
var twitter_login_url = '/settings/twitter/';

var add_twitter_accounts = function(form) {
  $.ajax({
    url: twitter_login_url,
    data: $(form).serialize(),
    type: 'POST',
    error: function(result){

    },
    success: function(result){
      $('#twitter-connect').show();
      $('#twitter-connect').html('Connect!');
        //window.location = '';
    },
    timeout: 60000 // sets timeout to 3 seconds
});
};