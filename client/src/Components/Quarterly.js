import React, { useState } from "react";

const Quarterly = () => {
    const [year, setYear]=useState("");
    const [quarter, setQuarter] = useState(0);
    const [month1, setMonth1] = useState("");
    const [month2, setMonth2] = useState("");
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
                Select Quarter
            </button>
            <ul class="dropdown-menu">
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setQuarter(1);
                            setMonth1("Jan");
                            setMonth2("Mar");
                        }}
                    >
                        1st
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setQuarter(2);
                            setMonth1("Apr");
                            setMonth2("Jun");
                        }}
                    >
                        2nd
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setQuarter(3);
                            setMonth1("Jul");
                            setMonth2("Sep");
                        }}
                    >
                        3rd
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setQuarter(4);
                            setMonth1("Oct");
                            setMonth2("Dec");
                        }}
                    >
                        4th
                    </a>
                </li>    
            </ul>
            
        </>
    );
};

export default Quarterly;
