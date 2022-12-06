import React, { useEffect, useState } from "react";
import Linegraph from "./Linegraph";
import Yearly from "./Yearly";
import Monthly from "./Monthly";
import Quarterly from "./Quarterly";
import Weekly from "./Weekly";

import Axios from "axios";



let data = []

var dict = {'Jan': 1 , 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'Jun': 6, 'Jul': 7, 'Aug': 8, 'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12};

const Homescreen = () => {
    const [period, setPeriod] = useState("");
    const [btnperiod, setbtnperiod] = useState("Period");
    const [year, setYear] = useState("Year");
    // const [month, setMonth] = useState("Month");
    const [currency, setCurrency] = useState("Currency");

    const [result, setResult] = useState([]);

    const GetMonthly = async () => {
        Axios.post("http://localhost:7000/graph/monthly", {
            year: year,
            currency: "Algerian dinar   (DZD)",
        }).then((response) => {
            // setResult(response.data.data1);
            // console.log(response.data[0]._id);
            // console.log(response.data[0]._id.Jan);

            // for (var i = 0; i < response.data.length; i++) {
            //     // data.push(response.data[0]._id.dict[i].value);
            //     console.log();
            // }
            // console.log(data);
            data = []
            data.push(response.data[0]._id.Jan.avg)
            data.push(response.data[0]._id.Feb.avg)
            data.push(response.data[0]._id.Mar.avg)
            data.push(response.data[0]._id.Apr.avg)
            data.push(response.data[0]._id.May.avg)
            data.push(response.data[0]._id.Jun.avg)
            data.push(response.data[0]._id.Jul.avg)
            data.push(response.data[0]._id.Aug.avg)
            data.push(response.data[0]._id.Sep.avg)
            data.push(response.data[0]._id.Oct.avg)
            data.push(response.data[0]._id.Nov.avg)
            data.push(response.data[0]._id.Dec.avg)
            console.log(data);

            setResult(data);

        });
    };

    // const GetMonthly = () => {
    //     useEffect(() => {
    //         Axios.post("http://localhost:7000/graph/monthly", {
    //             year: year,
    //             currency: currency,
    //         }).then((response) => {
    //             console.log(year, currency);
    //             console.log(response);
    //         });
    //     });
    // const response = fetch("http://localhost:7000/graph/monthly", {
    // method: " POST",
    // headers: {
    //     "Content-Type": "application/json",
    // },
    // body: JSON.stringify({
    //     year: year,
    //     currency: currency,
    // }),
    // });

    // try {
    //     const data = await response.json();
    //     console.log(data);
    // } catch (error) {
    //     console.log(error);

    // }

    // Axios.post("http://localhost:7000/graph/monthly", {
    // year: year,
    // currency: currency,
    // }).then((response) => {
    //     console.log(year, currency);
    //     console.log(response);
    // });
    // };

    return (
        <div className="home row">
            <div className="graphContainer col-lg-8">
                <Linegraph data={data}/>
            </div>
            <div className="choices col-lg-4">
                <h4>Make a Selection</h4>

                <div className="dropdown period">
                    <button
                        class="btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        {btnperiod}
                    </button>
                    <ul class="dropdown-menu">
                        <li>
                            <button
                                class="dropdown-item"
                                onClick={() => {
                                    setPeriod("Yearly");
                                    setbtnperiod("Yearly");
                                }}
                            >
                                Yearly
                            </button>
                        </li>
                        <li>
                            <button
                                class="dropdown-item"
                                onClick={() => {
                                    setPeriod("Monthly");
                                    setbtnperiod("Monthly");
                                }}
                            >
                                Monthly
                            </button>
                        </li>
                        <li>
                            <button
                                class="dropdown-item"
                                href="#"
                                onClick={() => {
                                    setPeriod("Weekly");
                                    setbtnperiod("Weekly");
                                }}
                            >
                                Weekly
                            </button>
                        </li>
                        <li>
                            <button
                                class="dropdown-item"
                                href="#"
                                onClick={() => {
                                    setPeriod("Quarterly");
                                    setbtnperiod("Quarterly");
                                }}
                            >
                                Quarterly
                            </button>
                        </li>
                    </ul>
                    {period === "Yearly" && <Yearly />}
                    {period === "Monthly" && (
                        <div className="period-div">
                            <div className="row">
                                <div className="year-col col-lg-6">
                                    <button
                                        class="btn btn-secondary dropdown-toggle mx-2"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        {year}
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setYear("2012");
                                                }}
                                            >
                                                2012
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setYear("2013");
                                                }}
                                            >
                                                2013
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setYear("2014");
                                                }}
                                            >
                                                2014
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setYear("2015");
                                                }}
                                            >
                                                2015
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setYear("2016");
                                                }}
                                            >
                                                2016
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setYear("2017");
                                                }}
                                            >
                                                2017
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setYear("2018");
                                                }}
                                            >
                                                2018
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setYear("2019");
                                                }}
                                            >
                                                2019
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setYear("2020");
                                                }}
                                            >
                                                2020
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setYear("2021");
                                                }}
                                            >
                                                2021
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setYear("2022");
                                                }}
                                            >
                                                2022
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="year-col col-lg-6">
                                    <button
                                        class="btn btn-secondary dropdown-toggle mx-2"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        {currency}
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setCurrency(
                                                        "Algerian dinar   (DZD)"
                                                    );
                                                }}
                                            >
                                                Algerian dinar (DZD)
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setCurrency(
                                                        "Australian dollar   (AUD)"
                                                    );
                                                }}
                                            >
                                                Australian dollar (AUD)
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setCurrency(
                                                        "Bahrain dinar   (BHD)"
                                                    );
                                                }}
                                            >
                                                Bahrain dinar (BHD)
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setCurrency(
                                                        "Bolivar Fuerte   (VEF)"
                                                    );
                                                }}
                                            >
                                                Bolivar Fuerte (VEF)
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <button
                                className="displayGraph"
                                onClick={GetMonthly}
                            >
                                Show Stats
                            </button>
                        </div>
                    )}
                    {period === "Quarterly" && <Quarterly />}
                    {period === "Weekly" && <Weekly />}
                </div>
                {/* <Linegraph/> */}
            </div>
        </div>
    );
};

export default Homescreen;