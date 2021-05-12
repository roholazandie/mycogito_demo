"use strict";

var log = console.log;

var load_twitters_followers_count = function(data) {
  $('#twitters_followers').html(data);
  $('.followers-area .loading').hide();
  $('.followers-area .data').show();
};

var load_twitters_followings_count = function(data) {
  $('#twitters_followings').html(data);
  $('.followings-area .loading').hide();
  $('.followings-area .data').show();
};

$(function() {

  var following_count_service_data = {
    platform_name: 'twitter',
    account_name: 'roholazandie',
    request: 'following_count'
  };

  var follower_count_service_data = {
    platform_name: 'twitter',
    account_name: 'roholazandie',
    request: 'followers_count'
  };

  var service_url = 'https://t4beikuqzf.execute-api.us-east-1.amazonaws.com/Prod/hello';


  $.ajax({
    url: service_url,
    data: following_count_service_data,
    type: 'GET',
    error: function(result){
        console.log(result);
    },
    success: function(result){
        load_twitters_followings_count(result);
    },
    timeout: 60000 // sets timeout to 3 seconds
});


  $.ajax({
    url: service_url,
    data: follower_count_service_data,
    type: 'GET',
    error: function(result){
        console.log(result);
    },
    success: function(result){
        load_twitters_followers_count(result);
    },
    timeout: 60000 // sets timeout to 3 seconds
});
});