import React, {Component} from 'react';
import Chart from 'chart.js';
import axios from 'axios';
import chartColors, { chartColorsInHex } from './chartUtil';
import {serverUrl} from '../../utils/env'

class PieChart extends Component {
    chartRef = React.createRef();
   
    constructor(props){
        super(props);
        this.state = {
            username: '', 
            categories: [],
            hours: []            
        }
    }

    componentDidMount(){
        var uname = localStorage.getItem('username');
        this.setState({
            username: uname 
        });

        this.getData()
        .then(result => this.createChart(result))
        .catch(err => console.log(err) );

        //this.createChart();
    }

    
    getData() {
        return new Promise((resolve, reject) => { 
            var uname = localStorage.getItem('username');
            const url = serverUrl + "/api/incompleted/" + uname;
            console.log("axios get ", url);
            axios.get(url)
            .then(res => {
                console.log("res.data",res);

                var jsonObj = {};

                for (var i=0; i<res.data.length; i++) { 
                    // Check if there is a property
                    if (jsonObj.hasOwnProperty(res.data[i].category)){
                        jsonObj[res.data[i].category] =  jsonObj[res.data[i].category] + 1; 
                    } else {
                        // create a new entry in JSON
                        jsonObj[res.data[i].category] = 1;
                    }
                }
                console.log("jsonObj", jsonObj)
                
                resolve(jsonObj);
            })
            .catch(err=>{
                reject(err);
            })
        })
    }
    

    createChart(jsonObj) {
        const myChartRef = this.chartRef.current.getContext("2d");

    //    var jsonObj = {selfcare: 13,
    //                 work:8, 
    //                 social:1}

        var categories = [];
        var numbers = [];


        for (var key in jsonObj ){
            //console.log("key is " + key + ", value is " + jsonObj[key]);
            categories.push(key);
            numbers.push(jsonObj[key]);
        }
        //console.log(categories, numbers);

        new Chart(myChartRef, {
            type: 'doughnut',
            data: {
              labels: categories,
              datasets: [{
                data: numbers,
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
