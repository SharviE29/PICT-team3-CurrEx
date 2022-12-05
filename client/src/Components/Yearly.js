import React, { useState } from "react";

const Yearly = () => {

    const [year1, setyear1] = useState("");
    const [year2, setyear2] = useState("");
    return (
        <>
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
                            setyear1("2012");
                        }}
                    >
                        2012
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setyear1("2013");
                        }}
                    >
                        2013
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setyear1("2014");
                        }}
                    >
                        2014
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setyear1("2015");
                        }}
                    >
                        2015
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setyear1("2016");
                        }}
                    >
                        2016
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setyear1("2017");
                        }}
                    >
                        2017
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setyear1("2018");
                        }}
                    >
                        2018
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setyear1("2019");
                        }}
                    >
                        2019
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setyear1("2020");
                        }}
                    >
                        2020
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setyear1("2021");
                        }}
                    >
                        2021
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setyear1("2022");
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
                To
            </button>
            <ul class="dropdown-menu">
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setyear2("2012");
                        }}
                    >
                        2012
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setyear2("2013");
                        }}
                    >
                        2013
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setyear2("2014");
                        }}
                    >
                        2014
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setyear2("2015");
                        }}
                    >
                        2015
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setyear2("2016");
                        }}
                    >
                        2016
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setyear2("2017");
                        }}
                    >
                        2017
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setyear2("2018");
                        }}
                    >
                        2018
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setyear2("2019");
                        }}
                    >
                        2019
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setyear2("2020");
                        }}
                    >
                        2020
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setyear2("2021");
                        }}
                    >
                        2021
                    </a>
                </li>
                <li>
                    <a
                        class="dropdown-item"
                        onClick={() => {
                            setyear2("2022");
                        }}
                    >
                        2022
                    </a>
                </li>
            </ul>
        </>
    );
};

export default Yearly;
