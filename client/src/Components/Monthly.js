import React, { useState } from "react";

const Monthly = () => {
    const [year, setYear] = useState("Year");
    // const [month, setMonth] = useState("Month");
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
                                    setCurrency("Algerian dinar   (DZD)");
                                }}
                            >
                                Algerian dinar   (DZD)
                            </button>
                        </li>
                        <li>
                            <button
                                class="dropdown-item"
                                onClick={() => {
                                    setCurrency("Australian dollar   (AUD)");
                                }}
                            >
                                Australian dollar   (AUD)
                            </button>
                        </li>
                        <li>
                            <button
                                class="dropdown-item"
                                onClick={() => {
                                    setCurrency("Bahrain dinar   (BHD) ");
                                }}
                            >
                                Bahrain dinar   (BHD)
                            </button>
                        </li>
                        <li>
                            <button
                                class="dropdown-item"
                                onClick={() => {
                                    setCurrency("Bolivar Fuerte   (VEF)");
                                }}
                            >
                                Bolivar Fuerte   (VEF)
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <button className="displayGraph">
                Show Stats
            </button>
        </div>

    );
};

export default Monthly;