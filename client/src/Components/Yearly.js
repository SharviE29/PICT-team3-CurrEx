import React, { useState } from "react";

const Yearly = () => {

    const [year1, setyear1] = useState("From");
    const [year2, setyear2] = useState("To");
    const [currency, setCurrency] = useState("Currency");
    return (
        <div className="period-div">
            <div className="row">
            <div className="year-col col-lg-6">
                <button
                    class="btn btn-secondary dropdown-toggle mx-2"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                   {year1}
                </button>
                <ul class="dropdown-menu">
                    <li>
                        <button
                            class="dropdown-item"
                            onClick={() => {
                                setyear1("2012");
                            }}
                        >
                            2012
                        </button>
                    </li>
                    <li>
                        <button
                            class="dropdown-item"
                            onClick={() => {
                                setyear1("2013");
                            }}
                        >
                            2013
                        </button>
                    </li>
                    <li>
                        <button
                            class="dropdown-item"
                            onClick={() => {
                                setyear1("2014");
                            }}
                        >
                            2014
                        </button>
                    </li>
                    <li>
                        <button
                            class="dropdown-item"
                            onClick={() => {
                                setyear1("2015");
                            }}
                        >
                            2015
                        </button>
                    </li>
                    <li>
                        <button
                            class="dropdown-item"
                            onClick={() => {
                                setyear1("2016");
                            }}
                        >
                            2016
                        </button>
                    </li>
                    <li>
                        <button
                            class="dropdown-item"
                            onClick={() => {
                                setyear1("2017");
                            }}
                        >
                            2017
                        </button>
                    </li>
                    <li>
                        <button
                            class="dropdown-item"
                            onClick={() => {
                                setyear1("2018");
                            }}
                        >
                            2018
                        </button>
                    </li>
                    <li>
                        <button
                            class="dropdown-item"
                            onClick={() => {
                                setyear1("2019");
                            }}
                        >
                            2019
                        </button>
                    </li>
                    <li>
                        <button
                            class="dropdown-item"
                            onClick={() => {
                                setyear1("2020");
                            }}
                        >
                            2020
                        </button>
                    </li>
                    <li>
                        <button
                            class="dropdown-item"
                            onClick={() => {
                                setyear1("2021");
                            }}
                        >
                            2021
                        </button>
                    </li>
                    <li>
                        <button
                            class="dropdown-item"
                            onClick={() => {
                                setyear1("2022");
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
                    {year2}
                </button>
                <ul class="dropdown-menu">
                    <li>
                        <button
                            class="dropdown-item"
                            onClick={() => {
                                setyear2("2012");
                            }}
                        >
                            2012
                        </button>
                    </li>
                    <li>
                        <button
                            class="dropdown-item"
                            onClick={() => {
                                setyear2("2013");
                            }}
                        >
                            2013
                        </button>
                    </li>
                    <li>
                        <button
                            class="dropdown-item"
                            onClick={() => {
                                setyear2("2014");
                            }}
                        >
                            2014
                        </button>
                    </li>
                    <li>
                        <button
                            class="dropdown-item"
                            onClick={() => {
                                setyear2("2015");
                            }}
                        >
                            2015
                        </button>
                    </li>
                    <li>
                        <button
                            class="dropdown-item"
                            onClick={() => {
                                setyear2("2016");
                            }}
                        >
                            2016
                        </button>
                    </li>
                    <li>
                        <button
                            class="dropdown-item"
                            onClick={() => {
                                setyear2("2017");
                            }}
                        >
                            2017
                        </button>
                    </li>
                    <li>
                        <button
                            class="dropdown-item"
                            onClick={() => {
                                setyear2("2018");
                            }}
                        >
                            2018
                        </button>
                    </li>
                    <li>
                        <button
                            class="dropdown-item"
                            onClick={() => {
                                setyear2("2019");
                            }}
                        >
                            2019
                        </button>
                    </li>
                    <li>
                        <button
                            class="dropdown-item"
                            onClick={() => {
                                setyear2("2020");
                            }}
                        >
                            2020
                        </button>
                    </li>
                    <li>
                        <button
                            class="dropdown-item"
                            onClick={() => {
                                setyear2("2021");
                            }}
                        >
                            2021
                        </button>
                    </li>
                    <li>
                        <button
                            class="dropdown-item"
                            onClick={() => {
                                setyear2("2022");
                            }}
                        >
                            2022
                        </button>
                    </li>
                </ul>
            </div>
            </div>
            <div className="curr-row">
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
                                setCurrency("2012");
                            }}
                        >
                            2012
                        </button>
                    </li>
                    <li>
                        <button
                            class="dropdown-item"
                            onClick={() => {
                                setCurrency("2013");
                            }}
                        >
                            2013
                        </button>
                    </li>
                    <li>
                        <button
                            class="dropdown-item"
                            onClick={() => {
                                setCurrency("2014");
                            }}
                        >
                            2014
                        </button>
                    </li>
                    <li>
                        <button
                            class="dropdown-item"
                            onClick={() => {
                                setCurrency("2015");
                            }}
                        >
                            2015
                        </button>
                    </li>
                    <li>
                        <button
                            class="dropdown-item"
                            onClick={() => {
                                setCurrency("2016");
                            }}
                        >
                            2016
                        </button>
                    </li>
                    <li>
                        <button
                            class="dropdown-item"
                            onClick={() => {
                                setCurrency("2017");
                            }}
                        >
                            2017
                        </button>
                    </li>
                    <li>
                        <button
                            class="dropdown-item"
                            onClick={() => {
                                setCurrency("2018");
                            }}
                        >
                            2018
                        </button>
                    </li>
                    <li>
                        <button
                            class="dropdown-item"
                            onClick={() => {
                                setCurrency("2019");
                            }}
                        >
                            2019
                        </button>
                    </li>
                    <li>
                        <button
                            class="dropdown-item"
                            onClick={() => {
                                setCurrency("2020");
                            }}
                        >
                            2020
                        </button>
                    </li>
                    <li>
                        <button
                            class="dropdown-item"
                            onClick={() => {
                                setCurrency("2021");
                            }}
                        >
                            2021
                        </button>
                    </li>
                    <li>
                        <button
                            class="dropdown-item"
                            onClick={() => {
                                setCurrency("2022");
                            }}
                        >
                            2022
                        </button>
                    </li>
                </ul>
            </div>
            <button className="displayGraph">
                Show Stats
            </button>
        </div>
    );
};

export default Yearly;