import React from 'react';
import LineChart from 'react-chartjs/lib/line';
import DoughnutChart from 'react-chartjs/lib/doughnut';
import BarChart from 'react-chartjs/lib/bar';
import RadarChart from 'react-chartjs/lib/radar';
import PieChart from 'react-chartjs/lib/pie';

export const LINE_CHART = 'LineChart';
export const DOUGHNUT_CHART = 'DoughnutChart';
export const BAR_CHART = 'BarChart';
export const RADAR_CHART = 'RadarChart';
export const PIE_CHART = 'PieChart';

const Charter = (props) => {
let dimen_width = 400;
let dimen_height= 200;

    let lineData = {
        labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        datasets: [{ //Line for the user
                label: "User Growth",
                fillColor: "rgba(50, 74, 92, 0.8)",
                strokeColor: "rgba(22,223,130,1)",
                pointColor: "#fff",
                pointStrokeColor: "rgba(50, 74, 92, 1)",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(22,223,130,1)",
                data: [0, 4, 2, 1, 3, 0, 1]
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
    
    let doughnutData = [
        {
            value: 5,
            color: "#16df82",
            highlight: "#5AD3D1",
            label: "Articles Read"
        },
        {
            value: 25,
            color:"#CFD8DC",
            highlight: "#FF5A5E",
            label: "Articles Unread"
        },
        
        // {
        //     value: 100,
        //     color: "#FDB45C",
        //     highlight: "#FFC870",
        //     label: "Yellow"
        // }
    ];

    let barData = {};
    let radarData = {};
    let pieData = {};

    let lineOptions = {
        ///Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines : true,
    
        //String - Colour of the grid lines
        scaleGridLineColor : "rgba(0,0,0,.05)",
    
        //Number - Width of the grid lines
        scaleGridLineWidth : 1,
    
        //Boolean - Whether to show horizontal lines (except X axis)
        scaleShowHorizontalLines: true,
    
        //Boolean - Whether to show vertical lines (except Y axis)
        scaleShowVerticalLines: true,
    
        //Boolean - Whether the line is curved between points
        bezierCurve : true,
    
        //Number - Tension of the bezier curve between points
        bezierCurveTension : 0.4,
    
        //Boolean - Whether to show a dot for each point
        pointDot : true,
    
        //Number - Radius of each point dot in pixels
        pointDotRadius : 4,
    
        //Number - Pixel width of point dot stroke
        pointDotStrokeWidth : 1,
    
        //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
        pointHitDetectionRadius : 20,
    
        //Boolean - Whether to show a stroke for datasets
        datasetStroke : true,
    
        //Number - Pixel width of dataset stroke
        datasetStrokeWidth : 2,
    
        //Boolean - Whether to fill the dataset with a colour
        datasetFill : true,
    
        //Boolean - Whether to horizontally center the label and point dot inside the grid
        offsetGridLines : false
    };

    let doughnutOptions = {
        //Boolean - Whether we should show a stroke on each segment
        segmentShowStroke : true,

        //String - The colour of each segment stroke
        segmentStrokeColor : "#fff",

        //Number - The width of each segment stroke
        segmentStrokeWidth : 1,

        //Number - The percentage of the chart that we cut out of the middle
        percentageInnerCutout : 80, // This is 0 for Pie charts

        //Number - Amount of animation steps
        animationSteps : 160,

        //String - Animation easing effect
        animationEasing : "easeOutBounce",

        //Boolean - Whether we animate the rotation of the Doughnut
        animateRotate : true,

        //Boolean - Whether we animate scaling the Doughnut from the centre
        animateScale : false,
    };

    let barOptions = {};
    let radarOptions = {};
    let pieOptions = {};

    let chart = null;

    switch(props.type){
        case LINE_CHART:{
            chart = (<LineChart data={lineData} options={lineOptions} width={dimen_width} height={dimen_height}/>);
            break;
        }
        case DOUGHNUT_CHART: {
            chart = (<DoughnutChart data={doughnutData} options={doughnutOptions} width={dimen_width} height={dimen_height}/>);
            break;
        }
        case BAR_CHART:{
            chart = (<BarChart data={barData} options={barOptions} width={dimen_width} height={dimen_height}/>);
            break;
        }
        case RADAR_CHART:{
            chart = (<RadarChart data={radarData} options={radarOptions} width={dimen_width} height={dimen_height}/>);
            break;
        }
        case PIE_CHART:{
            chart = (<PieChart data={pieData} options={pieOptions} width={dimen_width} height={dimen_height}/>);
            break;
        }

        default: chart = (<h4>Please choose a listed Visualization Type to explore your learning curve.</h4>)
    }


    return(
    <div className="Card">
        {chart}
    </div>
    );
};

export default Charter;