"use strict";

//added by Mycogito



//animation for text
///animation of text
// Wrap every letter in a span
try{
	var textWrapper = document.querySelector('.ml11 .letters');
	textWrapper.innerHTML = textWrapper.textContent.replace(/(\w|,|\.)/g, "<span class='letter'>$&</span>");
}catch (e) {
}




try{
	var textWrapper = document.querySelector('.ml12');
	textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

	anime.timeline({loop: false})
  .add({
	targets: '.ml11 .line',
	scaleY: [0,1],
	opacity: [0.5,1],
	easing: "easeOutExpo",
	duration: 700
  })
  .add({
	targets: '.ml11 .line',
	translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 20],
	easing: "easeOutExpo",
	duration: 700,
	delay: 100
  }).add({
	targets: '.ml11 .letter',
	opacity: [0,1],
	easing: "easeOutExpo",
	duration: 600,
	offset: '-=775',
	delay: (el, i) => 34 * (i+1)
  }).add({
	targets: '.ml11',
	opacity: 1,
	duration: 1000,
	easing: "easeOutExpo",
	delay: 1000
  });

}catch (e) {

}


anime.timeline({loop: false})
  .add({
	targets: '.ml12 .letter',
	translateX: [40,0],
	translateZ: 0,
	opacity: [0,1],
	easing: "easeOutExpo",
	duration: 1200,
	delay: (el, i) => 500 + 30 * i
  });

/////////////






// Cicle Chart
Circles.create({
	id:           'task-complete',
	radius:       50,
	value:        80,
	maxValue:     100,
	width:        5,
	text:         function(value){return value + '%';},
	colors:       ['#36a3f7', '#fff'],
	duration:     400,
	wrpClass:     'circles-wrp',
	textClass:    'circles-text',
	styleWrapper: true,
	styleText:    true
});

//Notify
$.notify({
	icon: 'flaticon-alarm-1',
	title: 'MyCogito',
	message: 'Updated!',
},{
	type: 'info',
	placement: {
		from: "bottom",
		align: "right"
	},
	time: 1000,
});

// JQVmap
$('#map-example').vectorMap(
{
	map: 'world_en',
	backgroundColor: 'transparent',
	borderColor: '#fff',
	borderWidth: 2,
	color: '#e4e4e4',
	enableZoom: true,
	hoverColor: '#cd3254',
	hoverOpacity: null,
	normalizeFunction: 'linear',
	scaleColors: ['#b6d6ff', '#005ace'],
	selectedColor: '#35cd3a',
	selectedRegions: ['ID', 'RU', 'IR' ,'AU', 'CN', 'BR'],
	showTooltip: true,
	onRegionClick: function(element, code, region)
	{
		return false;
	}
});

//Chart

// var ctx = document.getElementById('radarstatisticsChart');
//
//
// var radarChart = new Chart(ctx, {
// 	type: 'radar',
// 	data: {
// 		labels: ["Openness", "Conscientiousnes", "Extraversion", "Agreeableness", "Neuroticism"],
// 		datasets: [
// 			{
// 				label: "Personality Traits",
// 				data: [30, 40, 70, 10, 90],
// 				fill: true,
// 				backgroundColor: "rgba(255,255,255,0.2)",
// 				borderColor: "rgb(255, 99, 132)",
// 				pointBackgroundColor: "rgb(255,19,31)",
// 				pointBorderColor: "#fff",
// 				pointHoverBackgroundColor: "#fff",
// 				pointHoverBorderColor: "rgb(255, 99, 132)"
// 			}
// 		]
// 	},
//
// 	options: {
// 		elements: {
// 			line: {
// 				tension: 0,
// 				borderWidth: 3
// 			}
// 		}
// 	}
//
// });



// var myLegendContainer = document.getElementById("myChartLegend");
//
// // generate HTML legend
// myLegendContainer.innerHTML = statisticsChart.generateLegend();
//
// // bind onClick event to all LI-tags of the legend
// var legendItems = myLegendContainer.getElementsByTagName('li');
// for (var i = 0; i < legendItems.length; i += 1) {
// 	legendItems[i].addEventListener("click", legendClickCallback, false);
// }
//
// var dailySalesChart = document.getElementById('dailySalesChart').getContext('2d');
//
// var myDailySalesChart = new Chart(dailySalesChart, {
// 	type: 'line',
// 	data: {
// 		labels:["January",
// 		"February",
// 		"March",
// 		"April",
// 		"May",
// 		"June",
// 		"July",
// 		"August",
// 		"September"],
// 		datasets:[ {
// 			label: "Sales Analytics", fill: !0, backgroundColor: "rgba(255,255,255,0.2)", borderColor: "#fff", borderCapStyle: "butt", borderDash: [], borderDashOffset: 0, pointBorderColor: "#fff", pointBackgroundColor: "#fff", pointBorderWidth: 1, pointHoverRadius: 5, pointHoverBackgroundColor: "#fff", pointHoverBorderColor: "#fff", pointHoverBorderWidth: 1, pointRadius: 1, pointHitRadius: 5, data: [65, 59, 80, 81, 56, 55, 40, 35, 30]
// 		}]
// 	},
// 	options : {
// 		maintainAspectRatio:!1, legend: {
// 			display: !1
// 		}
// 		, animation: {
// 			easing: "easeInOutBack"
// 		}
// 		, scales: {
// 			yAxes:[ {
// 				display:!1, ticks: {
// 					fontColor: "rgba(0,0,0,0.5)", fontStyle: "bold", beginAtZero: !0, maxTicksLimit: 10, padding: 0
// 				}
// 				, gridLines: {
// 					drawTicks: !1, display: !1
// 				}
// 			}
// 			], xAxes:[ {
// 				display:!1, gridLines: {
// 					zeroLineColor: "transparent"
// 				}
// 				, ticks: {
// 					padding: -20, fontColor: "rgba(255,255,255,0.2)", fontStyle: "bold"
// 				}
// 			}
// 			]
// 		}
// 	}
// });

// $("#activeUsersChart").sparkline([112,109,120,107,110,85,87,90,102,109,120,99,110,85,87,94], {
// 	type: 'bar',
// 	height: '100',
// 	barWidth: 9,
// 	barSpacing: 10,
// 	barColor: 'rgba(255,255,255,.3)'
// });
//
// var topProductsChart = document.getElementById('topProductsChart').getContext('2d');
//
// var myTopProductsChart = new Chart(topProductsChart, {
// 	type:"line",
// 	data: {
// 		labels:["January",
// 		"February",
// 		"March",
// 		"April",
// 		"May",
// 		"June",
// 		"July",
// 		"August",
// 		"September",
// 		"October",
// 		"January",
// 		"February",
// 		"March",
// 		"April",
// 		"May",
// 		"June",
// 		"July",
// 		"August",
// 		"September",
// 		"October",
// 		"January",
// 		"February",
// 		"March",
// 		"April",
// 		"May",
// 		"June",
// 		"July",
// 		"August",
// 		"September",
// 		"October",
// 		"January",
// 		"February",
// 		"March",
// 		"April"],
// 		datasets:[ {
// 			label: "Sales Analytics", fill: !0, backgroundColor: "rgba(53, 205, 58, 0.2)", borderColor: "#35cd3a", borderCapStyle: "butt", borderDash: [], borderDashOffset: 0, pointBorderColor: "#35cd3a", pointBackgroundColor: "#35cd3a", pointBorderWidth: 1, pointHoverRadius: 5, pointHoverBackgroundColor: "#35cd3a", pointHoverBorderColor: "#35cd3a", pointHoverBorderWidth: 1, pointRadius: 1, pointHitRadius: 5, data: [20, 10, 18, 14, 32, 18, 15, 22, 8, 6, 17, 12, 17, 18, 14, 25, 18, 12, 19, 21, 16, 14, 24, 21, 13, 15, 27, 29, 21, 11, 14, 19, 21, 17]
// 		}
// 		]
// 	},
// 	options : {
// 		maintainAspectRatio:!1, legend: {
// 			display: !1
// 		}
// 		, animation: {
// 			easing: "easeInOutBack"
// 		}
// 		, scales: {
// 			yAxes:[ {
// 				display:!1, ticks: {
// 					fontColor: "rgba(0,0,0,0.5)", fontStyle: "bold", beginAtZero: !0, maxTicksLimit: 10, padding: 0
// 				}
// 				, gridLines: {
// 					drawTicks: !1, display: !1
// 				}
// 			}
// 			], xAxes:[ {
// 				display:!1, gridLines: {
// 					zeroLineColor: "transparent"
// 				}
// 				, ticks: {
// 					padding: -20, fontColor: "rgba(255,255,255,0.2)", fontStyle: "bold"
// 				}
// 			}
// 			]
// 		}
// 	}
// });

