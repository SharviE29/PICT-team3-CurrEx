import React from "react";

import { Line } from "react-chartjs-2";
import Chart from "react-google-charts";

import { Chart as ChartJS } from "chart.js/auto";
const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];


const Linegraph = (props) => {
    const LineData = [
        ["x", "value"],
        ["January", props.data[0]],
        ["February", props.data[1]],
        ["March", props.data[2]],
        ["April", props.data[3]],
        ["May", props.data[4]],
        ["June", props.data[5]],
        ["July", props.data[6]],
        ["August", props.data[7]],
        ["September", props.data[8]],
        ["October", props.data[9]],
        ["November", props.data[10]],
        ["December", props.data[11]],
    ];

    const LineChartOptions = {
        hAxis: {
            title: "Time",
        },
        vAxis: {
            title: "Popularity",
        },
        series: {
            1: { curveType: "function" },
        },
    };

    return (
        <div>
            {/* <Line 
                data={{
                    labels: labels,
                    datasets: [
                        {
                            label: "My First Dataset",
                            data: props.data,
                            fill: false,
                            borderColor: "rgb(255, 255, 255)",
                            tension: 0.5,
                        },
                    ],
                    options: {
                      responive: true,
                    }

                }}
            /> */}
            <Chart
                width={"700px"}
                height={"410px"}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={LineData}
                options={LineChartOptions}
                rootProps={{ "data-testid": "2" }}
            />
        </div>
    );
};

export default Linegraph;