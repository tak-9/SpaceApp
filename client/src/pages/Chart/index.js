import React, {Component} from 'react';
import Chart from 'chart.js';
import axios from 'axios';
import chartColors, { chartColorsInHex } from './chartUtil';

class PieChart extends Component {
    chartRef = React.createRef();
   
    /*
    constructor(props){
        super(props);
        this.state = {
            categories: [],
            hours: []            
        }
    }
    */

    componentDidMount(){
        // this.getData()
        // .then(result => this.createChart(result));
        this.createChart();
    }

    /*
    getData() {
        return new Promise((resolve, reject) => { 
            const url = "/api/dummy";
            axios.get(url)
            .then(res => {
                var hours = [];
                    // process data here. 
                    // hours.sort((a,b) => b.cases - a.cases);
                resolve(hours);
            })
            .catch(err=>{
                reject(err);
            })
        })
    }
    */

    createChart(input) {
        const myChartRef = this.chartRef.current.getContext("2d");

        /*
        var confirmedCases = [];
        var states = [];
        //var labels = [];
        for (let i=0; i<input.length; i++){
            confirmedCases.push(input[i].cases);
            states.push(input[i].state);
            //labels.push(input[i].state + "(" + input[i].cases + ")")
        }
        
        this.setState({
            states: states,
            confirmedCases: confirmedCases
        });
        */

       var jsonObj = {selfcare: 13,
                    work:8, 
                    social:1}

       var categories = [];
       var hours = [];

        for (var key in jsonObj ){
            //console.log("key is " + key + ", value is " + jsonObj[key]);
            categories.push(key);
            hours.push(jsonObj[key]);
        }
        console.log(categories, hours);

        new Chart(myChartRef, {
            type: 'doughnut',
            data: {
              labels: categories,
              datasets: [{
                data: hours,
                backgroundColor: [
                    chartColors.red,
                    chartColors.blue,
                    chartColors.green,
                    chartColors.orange,
                    chartColors.purple,
                    chartColors.yellow,
                    chartColors.grey
                ],
                hoverBorderColor: "rgba(234, 236, 244, 1)",
              }],
            },
            options: {
              maintainAspectRatio: false,
              tooltips: {
                backgroundColor: "rgb(255,255,255)",
                bodyFontColor: "#858796",
                borderColor: '#dddfeb',
                borderWidth: 1,
                xPadding: 15,
                yPadding: 15,
                displayColors: false,
                caretPadding: 10,
              },
              legend: {
                display: true, 
                position: "bottom", 
              },
              cutoutPercentage: 50,          
            }
        })

    }

    render() {
        return ( 
        <div>
            <h3>Pie Chart - Breakdown of today's activities</h3>
            <div>
                <div>
                    <canvas id="myChart" ref={this.chartRef} />
                </div>
            </div>
        </div>
        )
    };
}

export default PieChart;
