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

  var service_url = 'https://t4beikuqzf.execute-api.us-east-1.amazonaws.com/Prod/hello';
  var twitter_settings_url = 'settings/twitter/';

  $.ajax({
    url: twitter_settings_url,
    type: 'GET',
    error: function(result){
        log(result);
    },
    success: function(result){
      var twitter_username = result;

      var worldcloud_data = {
        platform_name: 'twitter',
        account_name: twitter_username,
        request: 'wordcloud'
      };

      var following_count_service_data = {
        platform_name: 'twitter',
        account_name: twitter_username,
        request: 'following_count'
      };

      var follower_count_service_data = {
        platform_name: 'twitter',
        account_name: twitter_username,
        request: 'followers_count'
      };

      var sentiment_over_time_data = {
        platform_name: 'twitter',
        account_name: twitter_username,
        request: 'sentiment_over_time'
      };

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

      $.ajax({
        url: service_url,
        data: sentiment_over_time_data,
        type: 'GET',
        error: function(result){
            console.log(result);
        },
        success: function(result){
            sentimentChart = load_sentiment_chart(result);
        },
        timeout: 60000 // sets timeout to 3 seconds
      });

      $.ajax({
        url: service_url,
        data: worldcloud_data,
        type: 'GET',
        error: function(result){
            console.log(result);
        },
        success: function(result){
            log(result);
            load_wordcloud_chart(result);
        },
        timeout: 60000 // sets timeout to 3 seconds
      });
    },
    timeout: 60000 // sets timeout to 3 seconds
});
});