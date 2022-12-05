import React, {useState} from "react";

const Monthly = () => {
    const [year, setYear]=useState("");
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
                From
            </button>
            <ul class="dropdown-menu">
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setMonth1("Jan");
                        }}
                    >
                        January
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setMonth1("Feb");
                        }}
                    >
                        February
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setMonth1("Mar");
                        }}
                    >
                        March
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setMonth1("Apr");
                        }}
                    >
                        April
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setMonth1("May");
                        }}
                    >
                        May
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setMonth1("Jun");
                        }}
                    >
                        June
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setMonth1("Jul");
                        }}
                    >
                        July
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setMonth1("Aug");
                        }}
                    >
                        August
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setMonth1("Sep");
                        }}
                    >
                        September
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setMonth1("Oct");
                        }}
                    >
                        October
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setMonth1("Nov");
                        }}
                    >
                        November
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setMonth1("Dec");
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
                To
            </button>
            <ul class="dropdown-menu">
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setMonth2("Jan");
                        }}
                    >
                        January
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setMonth2("Feb");
                        }}
                    >
                        February
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setMonth2("Mar");
                        }}
                    >
                        March
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setMonth2("Apr");
                        }}
                    >
                        April
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setMonth2("May");
                        }}
                    >
                        May
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setMonth2("Jun");
                        }}
                    >
                        June
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setMonth2("Jul");
                        }}
                    >
                        July
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setMonth2("Aug");
                        }}
                    >
                        August
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setMonth2("Sep");
                        }}
                    >
                        September
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setMonth2("Oct");
                        }}
                    >
                        October
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setMonth2("Nov");
                        }}
                    >
                        November
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setMonth2("Dec");
                        }}
                    >
                        December
                    </a>
                </li>
            </ul>
        </>
    );
};

export default Monthly;
