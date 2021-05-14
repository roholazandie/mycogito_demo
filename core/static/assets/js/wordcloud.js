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
