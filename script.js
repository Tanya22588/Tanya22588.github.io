//акордион
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active1");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

//ламана

google.charts.load("current", {
            packages: ["corechart"]
        });
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
            var data = google.visualization.arrayToDataTable([
                ['X', 'New Visitors', 'Old Visitors'],
                [1, 0.5, 1.5],
                [2, 4, 2],
                [3, 4.2, 2.8],
                [5, 4.5, 7],
                [6, 8, 3.5],
                [8, 7, 6]

            ]);

            var options = {
                hAxis: {
                    format: ''
                },
                colors: ['rgb(241,168,10)', 'rgb(41,168,10)'],
                pointSize: 10,
                lineWidth: 3,
                legend: {
                    position: 'top'
                }

            };

            var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
            chart.draw(data, options);
        }

    //<!--скріпт для першого графіка-->
window.onload = function() {

            var chart = new CanvasJS.Chart("chartContainer", {
                animationEnabled: true,
                title: {

                },
                axisX: {
                    valueFormatString: "MMM",
                    minimum: new Date(2016, 0),
                    maximum: new Date(2016, 11),
                    gridThickness: 1
                },
                axisY: {
                    includeZero: false
                },
                toolTip: {
                    shared: true
                },

                data: [{
                        type: "splineArea",
                        name: "Tax",
                        yValueFormatString: "$#,##0",
                        xValueFormatString: "MMM",
                        markerType: "none",
                        color: "rgba(11,196,223,.4)",
                        dataPoints: [{
                                x: new Date(2016, 0),
                                y: 2000
                            },
                            {
                                x: new Date(2016, 1),
                                y: 3800
                            },
                            {
                                x: new Date(2016, 2),
                                y: 11000
                            },
                            {
                                x: new Date(2016, 3),
                                y: 15500
                            },
                            {
                                x: new Date(2016, 4),
                                y: 12000
                            },
                            {
                                x: new Date(2016, 5),
                                y: 5500
                            },
                            {
                                x: new Date(2016, 6),
                                y: 4000
                            },
                            {
                                x: new Date(2016, 7),
                                y: 7000
                            },
                            {
                                x: new Date(2016, 8),
                                y: 11500
                            },
                            {
                                x: new Date(2016, 9),
                                y: 12500
                            },
                            {
                                x: new Date(2016, 10),
                                y: 5000
                            },
                            {
                                x: new Date(2016, 11),
                                y: 2000
                            }
                        ]
                    },


                    {
                        type: "splineArea",
                        yValueFormatString: "$#,##0",
                        markerType: "none",
                        name: "Shipment",
                        color: "rgba(30,117,225,.9)",
                        dataPoints: [{
                                x: new Date(2016, 0),
                                y: 2000
                            },
                            {
                                x: new Date(2016, 1),
                                y: 2500
                            },
                            {
                                x: new Date(2016, 2),
                                y: 7000
                            },
                            {
                                x: new Date(2016, 3),
                                y: 11000
                            },
                            {
                                x: new Date(2016, 4),
                                y: 10500
                            },
                            {
                                x: new Date(2016, 5),
                                y: 6000
                            },
                            {
                                x: new Date(2016, 6),
                                y: 2600
                            },
                            {
                                x: new Date(2016, 7),
                                y: 3000
                            },
                            {
                                x: new Date(2016, 8),
                                y: 10000
                            },
                            {
                                x: new Date(2016, 9),
                                y: 12500
                            },
                            {
                                x: new Date(2016, 10),
                                y: 2500
                            },
                            {
                                x: new Date(2016, 11),
                                y: 1000
                            }
                        ]
                    },
                    {
                        type: "splineArea",
                        name: "Order",
                        yValueFormatString: "$#,##0",
                        markerType: "none",
                        color: "rgba(241,168,10,1)",
                        dataPoints: [{
                                x: new Date(2016, 0),
                                y: 2000
                            },
                            {
                                x: new Date(2016, 1),
                                y: 3000
                            },
                            {
                                x: new Date(2016, 2),
                                y: 11200
                            },
                            {
                                x: new Date(2016, 3),
                                y: 15000
                            },
                            {
                                x: new Date(2016, 4),
                                y: 5500
                            },
                            {
                                x: new Date(2016, 5),
                                y: 4000
                            },
                            {
                                x: new Date(2016, 6),
                                y: 4800
                            },
                            {
                                x: new Date(2016, 7),
                                y: 7500
                            },
                            {
                                x: new Date(2016, 8),
                                y: 10000
                            },
                            {
                                x: new Date(2016, 9),
                                y: 9000
                            },
                            {
                                x: new Date(2016, 10),
                                y: 5050
                            },
                            {
                                x: new Date(2016, 11),
                                y: 2050
                            }
                        ]
                    },
                ]
            });
            chart.render();

        }

//кільцева діаграма
//текст в кільці(заголовок)
 zingchart.MODULESDIR = "https://cdn.zingchart.com/modules/";
        ZC.LICENSE = ["569d52cefae586f634c54f86dc99e6a9", "ee6b7db5b51705a13dc2339db3edaf6d"];
var myConfig = {
backgroundColor:'#fff',
 	type: "ring",
 	title: {
 	  marginTop:130,
        text: "MC",
 	  fontFamily: 'Lato',
 	  fontSize: 50,
        fontWeight:'bold',
 	  padding: "1",
 	  fontColor : "#000",
 	},
 	//кільце з ефектами
 	plot: {
 	  slice:'65%',
 	  borderWidth:0,
 	  backgroundColor:'#fff',
 	  animation:{
 	    effect:2,
 	    sequence:3
 	  },
        //написи біля кільця - підписи осей
 	  valueBox: [
 	    {
 	      type: 'all',
             fontSize: 13,
            fontWeight:1,
 	      text: '%t\n%npv%',
        placement: 'out'
 	    }, 
 	    
 	  ]
 	},
  
 	plotarea: {
 	  backgroundColor: 'transparent',
 	  borderWidth: 0,
 	  borderRadius: "0 0 0 0",
 	  margin: "0 0 0 0"
 	},
 	//поворот
 	scaleR:{
 	  refAngle:260
 	},
    
    //сегменти
	series : [
		{
		  text: "Research",
			values : [62],
            
			lineColor: "rgb(133, 200, 117)",
			backgroundColor: "rgb(133, 200, 117)",
			lineWidth: 1,
			marker: {
			  backgroundColor: 'rgb(133, 200, 117)'
			}
		},
		{
		  text: "Information",
			values : [17],
			lineColor: "#00BAF2",
			backgroundColor: "#00BAF2",
			lineWidth: 1,
			marker: {
			  backgroundColor: '#00BAF2'
			}
		},
		{
		  text: "Product \nDesign",
			values : [13],
			lineColor: "rgb(51, 102, 255)",
			backgroundColor: "rgb(51, 102, 255)",
			lineWidth: 1,
			marker: {
			  backgroundColor: 'rgb(51, 102, 255)'
			}
		},
        {
		  text: "Packaging",
			values : [8],
			lineColor: "rgb(255, 102, 51)",
			backgroundColor: "rgb(255, 102, 51)",
			lineWidth: 1,
            marker: {
			  backgroundColor: 'rgb(255, 102, 51)'
			}
			
		}
	]
};
 
zingchart.render({ 
	id : 'myChart', 
  data: {
    
    graphset: [myConfig]
  },
	height: '110%', 
	width: '100%' 
});







