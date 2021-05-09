"use strict";

var log = console.log;
var sentimentChart;
var COLORS = {
  'positive_sentiments' : '#FF2C63',
  'negative_sentiments': '#7D63D3',
  'neutral_sentiments': '#7DA303'
};
var UTILS = {
  'fillWithSeqNumbers': function (len) {
    var arr = [];
    for (let i = 1; i <= len; i++) {
      arr.push(i);
    }
    return arr;
  }
};
var load_sentiment_chart = function(data) {
  var delayed, sentimentChartConfig, sentimentData, labels;
  var sentimentChartElement = document.getElementById('sentimentChart').getContext('2d');

  if (data.positive_sentiments === undefined) {
    log('undefined data.positive_sentiments');
  }

  if (data.negative_sentiments === undefined) {
    log('undefined data.negative_sentiments');
  }

  if (data.neutral_sentiments === undefined) {
    log('undefined data.neutral_sentiments');
  }



  sentimentData = {
    labels: UTILS.fillWithSeqNumbers(data.positive_sentiments.length / 10),
    datasets: [
      {
        label: 'Positive Sentiments',
        data: data.positive_sentiments,
        borderColor: COLORS.positive_sentiments,
      },
      {
        label: 'Negative Sentiments',
        data: data.negative_sentiments,
        borderColor: COLORS.negative_sentiments,
      },
      {
        label: 'Neutral Sentiments',
        data: data.neutral_sentiments,
        borderColor: COLORS.neutral_sentiments,
      }
      ]
  };
  sentimentChartConfig = {
    type: 'line',
    data: sentimentData,
    options: {
      responsive: true,
      animation: {
        onComplete: () => {
          delayed = true;
        },
        delay: (context) => {
          let delay = 0;
          if (context.type === 'data' && context.mode === 'default' && !delayed) {
            delay = context.dataIndex * 300 + context.datasetIndex * 100;
          }
          return delay;
        },
      },
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Sentiment Chart'
        }
      }
    },
  };
  $('.sentimentChartContainer svg').hide();
  return new Chart(sentimentChartElement, sentimentChartConfig);

};

$(function() {

  var userData = {
    platform_name: 'twitter',
    account_name: 'roholazandie',
    request: 'sentiment_over_time'
  };
  var sentimentURL = 'https://t4beikuqzf.execute-api.us-east-1.amazonaws.com/Prod/hello';


  $.ajax({
    url: sentimentURL,
    data: userData,
    type: 'GET',
    error: function(result){
        console.log(result);
    },
    success: function(result){
        console.log(result);
        sentimentChart = load_sentiment_chart(result);
    },
    timeout: 60000 // sets timeout to 3 seconds
});
});