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
    labels: data.creation_dates,
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
