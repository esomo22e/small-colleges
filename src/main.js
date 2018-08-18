/******/
(function(modules) { // webpackBootstrap
    /******/ // The module cache
    /******/
    var installedModules = {};

    /******/ // The require function
    /******/
    function __webpack_require__(moduleId) {

        /******/ // Check if module is in cache
        /******/
        if (installedModules[moduleId])
            /******/
            return installedModules[moduleId].exports;

        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
            /******/
            exports: {},
            /******/
            id: moduleId,
            /******/
            loaded: false
            /******/
        };

        /******/ // Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

        /******/ // Flag the module as loaded
        /******/
        module.loaded = true;

        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
    }


    /******/ // expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;

    /******/ // expose the module cache
    /******/
    __webpack_require__.c = installedModules;

    /******/ // __webpack_public_path__
    /******/
    __webpack_require__.p = "";

    /******/ // Load entry module and return exports
    /******/
    return __webpack_require__(0);
    /******/
})
/************************************************************************/
/******/
([
    /* 0 */
    /***/
    (function(module, exports) {

        'use strict';

        window.onResize = function(width) {
            console.log(width);
        };

        window.enterView = function(msg) {
            console.log('enter-view');
        };

        /***/
    })
    /******/
]);
var chartInit = {
	chart: {

   	 type: 'bar'


    },
    title: {
   	 text: null
    },
    xAxis: {

   	 categories:['Percent of revenue from student charges (tuition, room and board)', "Percent of the school's overall expenses covered by student charges"],
   	 type: 'college',
   	 visible: true,
	 lineWidth: 2,
	 tickWidth: 1.5,
	 lineColor: '#a0a0a0',
	 tickColor: '#a0a0a0',
	 labels:{
		 style:{
			 fontFamily: 'BentonSans',
			 fontSize: '11.5px',
			 fontWeight: 'bold',
			 color: '#606060',
			 overflow:'hidden',
			 flexWrap:'wrap',
			 padding: '10px',
			 margin: '0 10px 0 0'
		 }
	 }

    },
    yAxis: {

   	 visible: false,

   	 title: {

   		 text: null
   	 },
   	 stackLabels: {
   		 enabled: true,
   		 align: 'right',
   		 format: '{point.y:0f}',
   		 style: {
   			 fontWeight: 'bold',
   			 color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
   		 }
   	 }
    },
    legend: {

   	 enabled: false
    },
    tooltip: {
   	 headerFormat: '<b>{series.name}</b><br/>',
   	 pointFormat: '{point.name}: {point.y}'
    },

    exporting: { enabled: false},
    credits:{
   	 enabled: false
    },
  series: [{

    data: [0, 0]
  }, {

    data: [0, 0]
  }]
};
var chartInit2 = {
    chart: {

        type: 'bar'


    },
    title: {
        text: null
    },
    xAxis: {

		categories:['Enrollment (by full-time equivalent)'],
        type: 'college',
        visible: true,
		lineWidth: 2,
		tickWidth: 1.5,
		lineColor: '#a0a0a0',
		tickColor: '#a0a0a0',
		labels:{
			style:{
				fontFamily: 'BentonSans',
				fontSize: '11.5px',
				fontWeight: 'bold',
				color: '#606060'
			}
		}

    },
    yAxis: {
        min: 0,
        lineColor: 'transparent',
        visible: false,
        title: {

            text: null
        },
        stackLabels: {
            enabled: true,
            align: 'right',
            format: '{point.y:0f}',
            style: {
                fontWeight: 'bold',
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
            }
        }
    },
    legend: {

        enabled: false
    },
    tooltip: {
        headerFormat: '<b>{series.name}</b><br/>',
        pointFormat: '{point.name}: {point.y}'
    },

	exporting: {
		enabled: false
	},
	credits:{
		enabled: false
	},

	series: [{

      data: [0]
    }, {

      data: [0]
    }]
};
Highcharts.chart('bar_container', chartInit);
Highcharts.chart('bar_container2', chartInit2);

var chartOptions = {
    chart: {

        type: 'bar'


    },
    title: {
        text: null
    },
    xAxis: {

		categories:['Percent of revenue from student charges (tuition, room and board)', "Percent of the school's overall expenses covered by student charges"],
        type: 'college',
        visible: true,
		lineWidth: 2,
		tickWidth: 1.5,
		lineColor: '#a0a0a0',
		tickColor: '#a0a0a0',
		labels:{
			style:{
				fontFamily: 'BentonSans',
				fontSize: '11.5px',
				fontWeight: 'bold',
				color: '#606060'
			}
		}

    },
    yAxis: {
        min: 0,
        lineColor: 'transparent',
        visible: false,

        title: {

            text: null
        },
        stackLabels: {
            enabled: true,
            align: 'right',
            format: '{point.y:0f}',
            style: {
                fontWeight: 'bold',
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
            }
        }
    },
    legend: {

        enabled: false
    },
    tooltip: {
		enabled: false,

    },

    plotOptions: {

        bar: {
            /* stacking: 'normal', */
            dataLabels: {
				stacking: 'normal',
                enabled: true,
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'black',
                formatter: function() {
					if(this.y !== null){
						return this.y + '%';
						// '{point.y:0f}%'
					}
					else{
						return 'null';
					}

					return false;
				},
            }
        }
    },
	exporting: { enabled: false},
	credits:{
		enabled: false
	},

    series: []
};

var chartOptions2 = {
    chart: {

        type: 'bar'


    },
    title: {
        text: null
    },
    xAxis: {

		categories:['Enrollment (by full-time equivalent)'],
        type: 'college',
        visible: true,
		lineWidth: 2,
		tickWidth: 1.5,
		lineColor: '#a0a0a0',
		tickColor: '#a0a0a0',
		labels:{
			style:{
				fontFamily: 'BentonSans',
				fontSize: '11.5px',
				fontWeight: 'bold',
				color: '#606060'
			}
		}
        // lineColor: 'transparent'
    },
    yAxis: {
        min: null,
        lineColor: 'transparent',
        visible: false,
        title: {
            // text: 'Total percent over years'
            text: null
        },
        stackLabels: {
            enabled: true,
            align: 'right',
            format: '{point.y:0f}',
            style: {
                fontWeight: 'bold',
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
            }
        }
    },
    legend: {

        enabled: false
    },
	tooltip: {
		enabled: false,

    },

    plotOptions: {
        bar: {
            /* stacking: 'normal', */
            dataLabels: {

                enabled: true,
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'black',
                format: '{point.y:0f}',

            }
        }
    },
	exporting: {
		enabled: false
	},
	credits:{
		enabled: false
	},
    // dataLabels:{
    //   enabled: true,
    //   format: '{point.y:0f}%'
    // },
    series: []
};
//load CSV - emulated infile to show in JSFiddle
// Highcharts.chart('bar_container', chartOptions);
$.get('./assets/final_data_charted.csv', function(data) {
    // Split the lines
    var lines = data.split('\n'),
        colleges = {},
		collEnrollment = {},
		initcol = {};

    // Iterate over the lines and create data sets - colleges
    $.each(lines, function(lineNo, line) {
        var items = line.split(','),
            yearFound = false,
            college, stuCharges12,stuCharges16, cov12, cov16, enroll12,enroll16;

        if (lineNo === 0) { // header line containes info
        } // rest of lines contain data
        else {
            college = items[0],
            stuCharges12 = items[1],
            stuCharges16 = items[2],
            cov12 = items[3],
			cov16 = items[4],
			enroll12 = items[5],
			enroll16 = items[6];
            // check if new college
            if (colleges[college] === undefined) {
                colleges[college] = [{
                    name: '2012',
                     data: [{name: '2012',y: parseInt(stuCharges12)}, {name: '2012',y: parseInt(cov12)} ],
					 color: '#53A5E4'
                }
				, {
                    name: '2016',
                    data: [{name: '2016',y: parseInt(stuCharges16)}, {name: '2016',y: parseInt(cov16)} ],
					color: '#FFAD06'
                }
				];
            }

		if(collEnrollment[college] == undefined) {
				collEnrollment[college] = [{
                    name: '2012',
                    data: [{name: '2012',y: parseInt(enroll12)} ],
					color: '#53A5E4'
                }, {
                    name: '2016',
                    data: [{name: '2016',y: parseInt(enroll16)} ],
					color: '#FFAD06'
                }

				];
			}
			// else {
            //     $.each(colleges[college], function(yearNo, collegeYear) {
            //         if (year === collegeYear.name) {
            //             yearFound = true;
            //             collegeYear.data.push({
            //                 name: city,
            //                 y: parseInt(percent)
            //             });
            //             return false; //exit this each loop
            //         }
            //     });
            //     if (!yearFound) { // new year
            //         colleges[college].push({
            //             name: year,
            //             data: [{
            //                 name: city,
            //                 y: parseInt(percent)
            //             }]
            //         });
            //     }
            // }
        }
    });

    $.each(colleges, function(collegeName, college) {
        $('#selectCollege')
            .append($("<option></option>")
                .attr("value", collegeName)
                .text(collegeName));

        // $.each(college, function(j, info) {
        //     info.data.sort(function(a, b) {
        //         a.name > b.name;
        //     });
        // });
    });

    $("#selectCollege").change(function() {
        var selected = this.value;

        if (selected !== 'start_opt') {
        	var barChart = $('#start_opt').highcharts

            chartOptions.series = $.extend(true, [], colleges[selected]); // do deep copy to keep original data
			chartOptions2.series = $.extend(true, [], collEnrollment[selected]);
			Highcharts.chart('bar_container', chartOptions);
            Highcharts.chart('bar_container2',chartOptions2);


        }
    });
});
