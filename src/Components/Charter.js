import React from 'react';
import LineChart from 'react-chartjs/lib/line';
import DoughnutChart from 'react-chartjs/lib/doughnut';
import BarChart from 'react-chartjs/lib/bar';
import RadarChart from 'react-chartjs/lib/radar';
import PieChart from 'react-chartjs/lib/pie';
import PolarAreaChart from 'react-chartjs/lib/polar-area';

export const LINE_CHART = 'LineChart';
export const DOUGHNUT_CHART = 'DoughnutChart';
export const BAR_CHART = 'BarChart';
export const RADAR_CHART = 'RadarChart';
export const PIE_CHART = 'PieChart';
export const POLAR_AREA_CHART = 'PolarAreaChart';

const Charter = (props) => {
    //Resizable as per the responsive layout
    let dimen_width = props.width || 400;
    let dimen_height = props.height || 200;

    //const lineSampleData = [0, 4, 2, 1, 3, 0, 1];
    //const lineSampleLabels = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    //const radarSampleData = [4, 2, 4, 4, 2, 1];
    //const radarSampleDataBaseline = [5, 5, 5, 5, 5, 5];
    //const radarSampleLabels = ["Best Practices", "Investment", "Design", "Motivation", "Coding", "Leadership"];

    let lineData = {
        labels: props.chartLabels, //|| lineSampleLabels,
        datasets: [{ //Line for the user
            label: "User Growth",
            fillColor: "rgba(50, 74, 92, 0.8)",
            strokeColor: "rgba(22,223,130,1)",
            pointColor: "#fff",
            pointStrokeColor: "rgba(50, 74, 92, 1)",
            pointHighlightFill: "rgba(22,223,130,1)",
            pointHighlightStroke: "rgba(22,223,130,1)",
            data: props.chartData //|| lineSampleData
        }//,{
            //Pattern for the industry
            //     label: "Industry Standard",
            //     fillColor: "rgba(151,187,205,0.2)",
            //     strokeColor: "rgba(151,187,205,1)",
            //     pointColor: "rgba(151,187,205,1)",
            //     pointStrokeColor: "#fff",
            //     pointHighlightFill: "#fff",
            //     pointHighlightStroke: "rgba(151,187,205,1)",
            //     data: [4, 2, 2, 1, 0, 3, 4]
            // }
        ]
    };

    let radarData = {
        labels: props.chartLabels,// || radarSampleLabels,
        datasets: [{
            label: "Topic Coverage",
            fillColor: "rgba(50, 74, 92, 0.7)",
            strokeColor: "rgba(22,223,130,1)",
            pointColor: "#fff",
            pointStrokeColor: "rgba(50, 74, 92, 1)",
            pointHighlightFill: "rgba(22,223,130,1)",
            pointHighlightStroke: "rgba(50, 74, 92, 1)",
            data: props.chartData //|| radarSampleData
        }, {
            label: "Total Articles",
            fillColor: "rgba(151,187,205,0)",
            strokeColor: "rgba(151,187,205,0)",
            pointColor: "rgba(151,187,205,0)",
            pointStrokeColor: "#0ffffff",
            pointHighlightFill: "#0ffffff",
            pointHighlightStroke: "rgba(151,187,205,0)",
            data: props.chartDataBaseline// || radarSampleDataBaseline
        }]
    };

    let doughnutData = [{
        value: 5,
        color: "#16df82",
        highlight: "#5AD3D1",
        label: "Articles Read"
    }, 
        // {
        //     value: 100,
        //     color: "#FDB45C",
        //     highlight: "#FFC870",
        //     label: "Yellow"
        // }
    {
        value: 25,
        color: "#CFD8DC",
        highlight: "#FF5A5E",
        label: "Articles Unread"
    },
    ];

    let barData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,0.8)",
                highlightFill: "rgba(220,220,220,0.75)",
                highlightStroke: "rgba(220,220,220,1)",
                data: [65, 59, 80, 81, 56, 55, 40]
            }, {
                label: "My Second dataset",
                fillColor: "rgba(151,187,205,0.5)",
                strokeColor: "rgba(151,187,205,0.8)",
                highlightFill: "rgba(151,187,205,0.75)",
                highlightStroke: "rgba(151,187,205,1)",
                data: [28, 48, 40, 19, 86, 27, 90]
            }]
    };

    let pieData = [{
        value: 5,
        color: "#16df82",
        highlight: "#5AD3D1",
        label: "Articles Read"
    }, {
        value: 25,
        color: "#CFD8DC",
        highlight: "#FF5A5E",
        label: "Articles Unread"
    },// {
        //     value: 100,
        //     color: "#FDB45C",
        //     highlight: "#FFC870",
        //     label: "Yellow"
        // }
    ];

    let polarData = [{
        value: 300,
        color: "#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    }, {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    }, {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    }, {
        value: 40,
        color: "#949FB1",
        highlight: "#A8B3C5",
        label: "Grey"
    }, {
        value: 120,
        color: "#4D5360",
        highlight: "#616774",
        label: "Dark Grey"
    }];

    let lineOptions = {
        ///Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines: true,

        //String - Colour of the grid lines
        scaleGridLineColor: "rgba(0,0,0,.1)",

        //Number - Width of the grid lines
        scaleGridLineWidth: 1,

        //Boolean - Whether to show horizontal lines (except X axis)
        scaleShowHorizontalLines: true,

        //Boolean - Whether to show vertical lines (except Y axis)
        scaleShowVerticalLines: false,

        //Boolean - Whether the line is curved between points
        bezierCurve: true,

        //Number - Tension of the bezier curve between points
        bezierCurveTension: 0.4,

        //Boolean - Whether to show a dot for each point
        pointDot: true,

        //Number - Radius of each point dot in pixels
        pointDotRadius: 4,

        //Number - Pixel width of point dot stroke
        pointDotStrokeWidth: 2,

        //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
        pointHitDetectionRadius: 20,

        //Boolean - Whether to show a stroke for datasets
        datasetStroke: true,

        //Number - Pixel width of dataset stroke
        datasetStrokeWidth: 3,

        //Boolean - Whether to fill the dataset with a colour
        datasetFill: true,

        //Boolean - Whether to horizontally center the label and point dot inside the grid
        offsetGridLines: false
    };

    let doughnutOptions = {
        //Boolean - Whether we should show a stroke on each segment
        segmentShowStroke: true,

        //String - The colour of each segment stroke
        segmentStrokeColor: "#fff",

        //Number - The width of each segment stroke
        segmentStrokeWidth: 1,

        //Number - The percentage of the chart that we cut out of the middle
        percentageInnerCutout: 80, // This is 0 for Pie charts

        //Number - Amount of animation steps
        animationSteps: 160,

        //String - Animation easing effect
        animationEasing: "easeOutBounce",

        //Boolean - Whether we animate the rotation of the Doughnut
        animateRotate: true,

        //Boolean - Whether we animate scaling the Doughnut from the centre
        animateScale: false,
    };

    let radarOptions = {
        //Boolean - Whether to show lines for each scale point
        scaleShowLine: true,

        //Boolean - Whether we show the angle lines out of the radar
        angleShowLineOut: true,

        //Boolean - Whether to show labels on the scale
        scaleShowLabels: true,

        // Boolean - Whether the scale should begin at zero
        scaleBeginAtZero: true,

        //String - Colour of the angle line
        angleLineColor: "rgba(0,0,0,0)",

        //Number - Pixel width of the angle line
        angleLineWidth: 2,

        //Number - Interval at which to draw angle lines ("every Nth point")
        angleLineInterval: 1,

        //String - Point label font declaration
        pointLabelFontFamily: "'Roboto'",

        //String - Point label font weight
        pointLabelFontStyle: "normal",

        //Number - Point label font size in pixels
        pointLabelFontSize: 12,

        //String - Point label font colour
        pointLabelFontColor: "#222222",

        //Boolean - Whether to show a dot for each point
        pointDot: true,

        //Number - Radius of each point dot in pixels
        pointDotRadius: 4,

        //Number - Pixel width of point dot stroke
        pointDotStrokeWidth: 2,

        //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
        pointHitDetectionRadius: 20,

        //Boolean - Whether to show a stroke for datasets
        datasetStroke: true,

        //Number - Pixel width of dataset stroke
        datasetStrokeWidth: 3,

        //Boolean - Whether to fill the dataset with a colour
        datasetFill: true,
    };

    let barOptions = {
        //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
        scaleBeginAtZero: true,

        //Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines: true,

        //String - Colour of the grid lines
        scaleGridLineColor: "rgba(0,0,0,.05)",

        //Number - Width of the grid lines
        scaleGridLineWidth: 1,

        //Boolean - Whether to show horizontal lines (except X axis)
        scaleShowHorizontalLines: true,

        //Boolean - Whether to show vertical lines (except Y axis)
        scaleShowVerticalLines: true,

        //Boolean - If there is a stroke on each bar
        barShowStroke: true,

        //Number - Pixel width of the bar stroke
        barStrokeWidth: 2,

        //Number - Spacing between each of the X value sets
        barValueSpacing: 5,

        //Number - Spacing between data sets within X values
        barDatasetSpacing: 1
    };


    let pieOptions = {
        //Boolean - Whether we should show a stroke on each segment
        segmentShowStroke: true,

        //String - The colour of each segment stroke
        segmentStrokeColor: "#fff",

        //Number - The width of each segment stroke
        segmentStrokeWidth: 1,

        //Number - The percentage of the chart that we cut out of the middle
        percentageInnerCutout: 0, // This is 0 for Pie charts

        //Number - Amount of animation steps
        animationSteps: 160,

        //String - Animation easing effect
        animationEasing: "easeOutBounce",

        //Boolean - Whether we animate the rotation of the Doughnut
        animateRotate: true,

        //Boolean - Whether we animate scaling the Doughnut from the centre
        animateScale: false,
    };

    let polarOptions = {
        //Boolean - Show a backdrop to the scale label
        scaleShowLabelBackdrop: true,

        //String - The colour of the label backdrop
        scaleBackdropColor: "rgba(255,255,255,0.75)",

        // Boolean - Whether the scale should begin at zero
        scaleBeginAtZero: true,

        //Number - The backdrop padding above & below the label in pixels
        scaleBackdropPaddingY: 2,

        //Number - The backdrop padding to the side of the label in pixels
        scaleBackdropPaddingX: 2,

        //Boolean - Show line for each value in the scale
        scaleShowLine: true,

        //Boolean - Stroke a line around each segment in the chart
        segmentShowStroke: true,

        //String - The colour of the stroke on each segment.
        segmentStrokeColor: "#fff",

        //Number - The width of the stroke value in pixels
        segmentStrokeWidth: 2,

        //Number - Amount of animation steps
        animationSteps: 100,

        //String - Animation easing effect.
        animationEasing: "easeOutBounce",

        //Boolean - Whether to animate the rotation of the chart
        animateRotate: true,

        //Boolean - Whether to animate scaling the chart from the centre
        animateScale: false,

        //String - A legend template
        legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"><%if(segments[i].label){%><%=segments[i].label%><%}%></span></li><%}%></ul>"
    };

    let chart = null;

    switch (props.type) {
        case LINE_CHART: {
            chart = (<LineChart data={lineData} options={lineOptions} width={dimen_width} height={dimen_height} />);
            break;
        }
        case DOUGHNUT_CHART: {
            chart = (<DoughnutChart data={doughnutData} options={doughnutOptions} width={dimen_width} height={dimen_height} />);
            break;
        }
        case BAR_CHART: {
            chart = (<BarChart data={barData} options={barOptions} width={dimen_width} height={dimen_height} />);
            break;
        }
        case RADAR_CHART: {
            chart = (<RadarChart data={radarData} options={radarOptions} width={dimen_width} height={dimen_height} />);
            break;
        }
        case PIE_CHART: {
            chart = (<PieChart data={pieData} options={pieOptions} width={dimen_width} height={dimen_height} />);
            break;
        }
        case POLAR_AREA_CHART: {
            chart = (<PolarAreaChart data={polarData} options={polarOptions} width={dimen_width} height={dimen_height} />);
            break;
        }

        default: chart = (<h4>Please choose a listed Visualization Type to explore your learning curve.</h4>)
    }

    // className="Card">
    return (
        <div>
            {chart}
        </div>
    );
};

export default Charter;