import React, { useState } from "react";

const Weekly = () => {
    const [year, setYear]=useState("");
    const [month, setMonth] = useState("");
    const [week, setWeek] = useState(0);
    return (
        <>
            <button
                class="btn btn-secondary dropdown-toggle mx-2"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                Year
            </button>
            <ul class="dropdown-menu">
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setYear("2012");
                        }}
                    >
                        2012
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setYear("2013");
                        }}
                    >
                        2013
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setYear("2014");
                        }}
                    >
                        2014
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setYear("2015");
                        }}
                    >
                        2015
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setYear("2016");
                        }}
                    >
                        2016
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setYear("2017");
                        }}
                    >
                        2017
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setYear("2018");
                        }}
                    >
                        2018
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setYear("2019");
                        }}
                    >
                        2019
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setYear("2020");
                        }}
                    >
                        2020
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setYear("2021");
                        }}
                    >
                        2021
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setYear("2022");
                        }}
                    >
                        2022
                    </a>
                </li>
            </ul>
            <button
                class="btn btn-secondary dropdown-toggle mx-2"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
             Set Month
            </button>
            <ul class="dropdown-menu">
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setMonth("Jan");
                        }}
                    >
                        January
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setMonth("Feb");
                        }}
                    >
                        February
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setMonth("Mar");
                        }}
                    >
                        March
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setMonth("Apr");
                        }}
                    >
                        April
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setMonth("May");
                        }}
                    >
                        May
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setMonth("Jun");
                        }}
                    >
                        June
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setMonth("Jul");
                        }}
                    >
                        July
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setMonth("Aug");
                        }}
                    >
                        August
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setMonth("Sep");
                        }}
                    >
                        September
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setMonth("Oct");
                        }}
                    >
                        October
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setMonth("Nov");
                        }}
                    >
                        November
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setMonth("Dec");
                        }}
                    >
                        December
                    </a>
                </li>
            </ul>
            <button
                class="btn btn-secondary dropdown-toggle mx-2"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                Select Week
            </button>
            <ul class="dropdown-menu">
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setWeek(1);
                        }}
                    >
                        1st
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setWeek(2);
                        }}
                    >
                        2nd
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setWeek(3);
                        }}
                    >
                        3rd
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setWeek(4);
                        }}
                    >
                        4th
                    </a>
                </li>    
            </ul>
            
        </>
    );
};

export default Weekly;
