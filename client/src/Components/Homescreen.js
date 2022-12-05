import React, { useState } from "react";
import Linegraph from "./Linegraph";

const Homescreen = () => {
    const [period, setPeriod] = useState("");

    return (
        <div className="home">
            <div className="GraphContainer">
                <div>{period}</div>
                <div className="dropdown period">
                    <button
                        class="btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Select Stuff
                    </button>
                    <ul class="dropdown-menu">
                        <li>
                            <a
                                class="dropdown-item"
                                onClick={() => {
                                    setPeriod("yearly");
                                }}
                            >
                                Yearly
                            </a>
                        </li>
                        <li>
                            <a
                                class="dropdown-item"
                                onClick={() => {
                                    setPeriod("monthly");
                                }}
                            >
                                Monthly
                            </a>
                        </li>
                        <li>
                            <a
                                class="dropdown-item"
                                href="#"
                                onClick={() => {
                                    setPeriod("weekly");
                                }}
                            >
                                Weekly
                            </a>
                        </li>
                        <li>
                            <a
                                class="dropdown-item"
                                href="#"
                                onClick={() => {
                                    setPeriod("quarterly");
                                }}
                            >
                                Quarterly
                            </a>
                        </li>
                    </ul>
                </div>
                {/* <Linegraph/> */}
                <div className="toInput">
                    <div>q</div>
                    <div>ds</div>
                </div>
            </div>
        </div>
    );
};

export default Homescreen;
