import React, {useState} from "react";
const Currency = () => {
    const [Currency, setCurrency]= useState("");
  return (
      <div className="dropdown currency">
                    <button
                        class="btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Select Currency
                    </button>
                    <ul class="dropdown-menu">
                        <li>
                            <a
                                class="dropdown-item"
                                onClick={() => {
                                    setCurrency("Yearly");
                                }}
                            >
                                Yearly
                            </a>
                        </li>
                        <li>
                            <a
                                class="dropdown-item"
                                onClick={() => {
                                    setCurrency("Monthly");
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
                                    setCurrency("Weekly");
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
                                    setCurrency("Quarterly");
                                }}
                            >
                                Quarterly
                            </a>
                        </li>
                    </ul>
                    
    </div>
  )
}

export default Currency