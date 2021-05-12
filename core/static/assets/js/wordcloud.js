"use strict";

var log = console.log;

var load_wordcloud_chart = function (data) {
  let entries = Object.entries(data);
  let result = [];
  for (let i = 0; i < entries.length; i++) {
    if (entries[i][1] < 2)
      continue;
    result.push({name: entries[i][0], weight: entries[i][1]})
  }
  $('.wordcloudChartContainer svg').hide();
  Highcharts.chart('container', {
    accessibility: {
        screenReaderSection: {
            beforeChartFormat: '<h5>{chartTitle}</h5>' +
                '<div>{chartSubtitle}</div>' +
                '<div>{chartLongdesc}</div>' +
                '<div>{viewTableButton}</div>'
        }
    },
    chart: {
      backgroundColor: 'transparent',
    },
    series: [{
        type: 'wordcloud',
        data: result,
        name: 'Occurrences'
    }],
    title: {
        text: 'Wordcloud'
    }
});
};

$(function() {

  var userData = {
    platform_name: 'twitter',
    account_name: 'roholazandie',
    request: 'wordcloud'
  };
  var wordcloudURL = 'https://t4beikuqzf.execute-api.us-east-1.amazonaws.com/Prod/hello';

  $.ajax({
    url: wordcloudURL,
    data: userData,
    type: 'GET',
    error: function(result){
        console.log(result);
    },
    success: function(result){
        console.log(result);
        sentimentChart = load_wordcloud_chart(result);
    },
    timeout: 60000 // sets timeout to 3 seconds
});
});