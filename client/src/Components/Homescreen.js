import React, { useEffect, useState } from "react";
import Linegraph from "./Linegraph";
import Yearly from "./Yearly";
import Monthly from "./Monthly";
import Quarterly from "./Quarterly";
import Weekly from "./Weekly";

import Axios from "axios";

let data = [];

var dict = {
    Jan: 1,
    Feb: 2,
    Mar: 3,
    Apr: 4,
    May: 5,
    Jun: 6,
    Jul: 7,
    Aug: 8,
    Sep: 9,
    Oct: 10,
    Nov: 11,
    Dec: 12,
};

let data1 = [];
let data2 = [];

const Homescreen = () => {
    const [period, setPeriod] = useState("");
    const [year1, setyear1] = useState("From");
    const [year2, setyear2] = useState("To");
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
            data = [];
            data.push(response.data[0]._id.Jan.avg);
            data.push(response.data[0]._id.Feb.avg);
            data.push(response.data[0]._id.Mar.avg);
            data.push(response.data[0]._id.Apr.avg);
            data.push(response.data[0]._id.May.avg);
            data.push(response.data[0]._id.Jun.avg);
            data.push(response.data[0]._id.Jul.avg);
            data.push(response.data[0]._id.Aug.avg);
            data.push(response.data[0]._id.Sep.avg);
            data.push(response.data[0]._id.Oct.avg);
            data.push(response.data[0]._id.Nov.avg);
            data.push(response.data[0]._id.Dec.avg);
            console.log(data);

            setResult(data);
        });
    };

    const GetYearly = async () => {
        Axios.post("http://localhost:7000/graph/yearly", {
            year1: year1,
            currency: currency,
        }).then((response) => {
            data1.push(response.data[0]._id.Feb.avg);
            data1.push(response.data[0]._id.Mar.avg);
            data1.push(response.data[0]._id.Apr.avg);
            data1.push(response.data[0]._id.May.avg);
            data1.push(response.data[0]._id.Jun.avg);
            data1.push(response.data[0]._id.Jan.avg);
            data1.push(response.data[0]._id.Jul.avg);
            data1.push(response.data[0]._id.Aug.avg);
            data1.push(response.data[0]._id.Sep.avg);
            data1.push(response.data[0]._id.Oct.avg);
            data1.push(response.data[0]._id.Nov.avg);
            data1.push(response.data[0]._id.Dec.avg);

            console.log(data1);
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
                <Linegraph data={data} />
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
                        {/* <li>
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
                        </li> */}
                        {/* <li>
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
                        </li> */}
                    </ul>
                    {period === "Yearly" && (
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
                                    <li>
                                        <button
                                            class="dropdown-item"
                                            onClick={() => {
                                                setCurrency(
                                                    "Botswana pula   (BWP)"
                                                );
                                            }}
                                        >
                                            Botswana pula (BWP)
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            class="dropdown-item"
                                            onClick={() => {
                                                setCurrency(
                                                    "Brazilian real   (BRL)"
                                                );
                                            }}
                                        >
                                            Brazilian real (BRL)
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            class="dropdown-item"
                                            onClick={() => {
                                                setCurrency(
                                                    "Brunei dollar   (BND)"
                                                );
                                            }}
                                        >
                                            Brunei dollar (BND)
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            class="dropdown-item"
                                            onClick={() => {
                                                setCurrency(
                                                    "Canadian dollar   (CAD)"
                                                );
                                            }}
                                        >
                                            Canadian dollar (CAD)
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            class="dropdown-item"
                                            onClick={() => {
                                                setCurrency(
                                                    "Chilean peso   (CLP)"
                                                );
                                            }}
                                        >
                                            Chilean peso (CLP)
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            class="dropdown-item"
                                            onClick={() => {
                                                setCurrency(
                                                    "Chinese yuan   (CNY)"
                                                );
                                            }}
                                        >
                                            Chinese yuan (CNY)
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            class="dropdown-item"
                                            onClick={() => {
                                                setCurrency(
                                                    "Colombian peso   (COP)"
                                                );
                                            }}
                                        >
                                            Colombian peso (COP)
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            class="dropdown-item"
                                            onClick={() => {
                                                setCurrency(
                                                    "Czech koruna   (CZK)"
                                                );
                                            }}
                                        >
                                            Czech koruna (CZK)
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            class="dropdown-item"
                                            onClick={() => {
                                                setCurrency(
                                                    "Danish krone   (DKK)"
                                                );
                                            }}
                                        >
                                            Danish krone (DKK)
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            class="dropdown-item"
                                            onClick={() => {
                                                setCurrency("Euro   (EUR)");
                                            }}
                                        >
                                            Euro (EUR)
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            class="dropdown-item"
                                            onClick={() => {
                                                setCurrency(
                                                    "Hungarian forint   (HUF)"
                                                );
                                            }}
                                        >
                                            Hungarian forint (HUF)
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            class="dropdown-item"
                                            onClick={() => {
                                                setCurrency(
                                                    "Icelandic krona   (ISK)"
                                                );
                                            }}
                                        >
                                            Icelandic krona (ISK)
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            class="dropdown-item"
                                            onClick={() => {
                                                setCurrency(
                                                    "Indian rupee   (INR)"
                                                );
                                            }}
                                        >
                                            Indian rupee (INR)
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            class="dropdown-item"
                                            onClick={() => {
                                                setCurrency(
                                                    "Indonesian rupiah   (IDR)"
                                                );
                                            }}
                                        >
                                            Indonesian rupiah (IDR)
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            class="dropdown-item"
                                            onClick={() => {
                                                setCurrency(
                                                    "Iranian rial   (IRR)"
                                                );
                                            }}
                                        >
                                            Iranian rial (IRR)
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            class="dropdown-item"
                                            onClick={() => {
                                                setCurrency(
                                                    "Israeli New Shekel   (ILS)"
                                                );
                                            }}
                                        >
                                            Israeli New Shekel (ILS)
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            class="dropdown-item"
                                            onClick={() => {
                                                setCurrency(
                                                    "Japanese yen   (JPY)"
                                                );
                                            }}
                                        >
                                            Japanese yen (JPY)
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            class="dropdown-item"
                                            onClick={() => {
                                                setCurrency(
                                                    "Kazakhstani tenge   (KZT)"
                                                );
                                            }}
                                        >
                                            Kazakhstani tenge (KZT)
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            class="dropdown-item"
                                            onClick={() => {
                                                setCurrency(
                                                    "Korean won   (KRW)"
                                                );
                                            }}
                                        >
                                            Korean won (KRW)
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            class="dropdown-item"
                                            onClick={() => {
                                                setCurrency(
                                                    "Kuwaiti dinar   (KWD)"
                                                );
                                            }}
                                        >
                                            Kuwaiti dinar (KWD)
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            class="dropdown-item"
                                            onClick={() => {
                                                setCurrency(
                                                    "Libyan dinar   (LYD)"
                                                );
                                            }}
                                        >
                                            Libyan dinar (LYD)
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            class="dropdown-item"
                                            onClick={() => {
                                                setCurrency(
                                                    "Malaysian ringgit   (MYR)"
                                                );
                                            }}
                                        >
                                            Malaysian ringgit (MYR)
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            class="dropdown-item"
                                            onClick={() => {
                                                setCurrency(
                                                    "Mauritian rupee   (MUR)"
                                                );
                                            }}
                                        >
                                            Mauritian rupee (MUR)
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            class="dropdown-item"
                                            onClick={() => {
                                                setCurrency(
                                                    "Mexican peso   (MXN)"
                                                );
                                            }}
                                        >
                                            Mexican peso (MXN)
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            class="dropdown-item"
                                            onClick={() => {
                                                setCurrency(
                                                    "Nepalese rupee   (NPR)"
                                                );
                                            }}
                                        >
                                            Nepalese rupee (NPR)
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            class="dropdown-item"
                                            onClick={() => {
                                                setCurrency(
                                                    "New Zealand dollar   (NZD)"
                                                );
                                            }}
                                        >
                                            New Zealand dollar (NZD)
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            class="dropdown-item"
                                            onClick={() => {
                                                setCurrency(
                                                    "Norwegian krone   (NOK)"
                                                );
                                            }}
                                        >
                                            Norwegian krone (NOK)
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            class="dropdown-item"
                                            onClick={() => {
                                                setCurrency(
                                                    "Omani rial   (OMR)"
                                                );
                                            }}
                                        >
                                            Omani rial (OMR)
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            class="dropdown-item"
                                            onClick={() => {
                                                setCurrency(
                                                    "Pakistani rupee   (PKR)"
                                                );
                                            }}
                                        >
                                            Pakistani rupee (PKR)
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            class="dropdown-item"
                                            onClick={() => {
                                                setCurrency(
                                                    "Peruvian sol   (PEN)"
                                                );
                                            }}
                                        >
                                            Peruvian sol (PEN)
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            class="dropdown-item"
                                            onClick={() => {
                                                setCurrency(
                                                    "Polish zloty   (PLN)"
                                                );
                                            }}
                                        >
                                            Polish zloty (PLN)
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            class="dropdown-item"
                                            onClick={() => {
                                                setCurrency(
                                                    "Qatari riyal   (QAR)"
                                                );
                                            }}
                                        >
                                            Qatari riyal (QAR)
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            class="dropdown-item"
                                            onClick={() => {
                                                setCurrency(
                                                    "Russian ruble   (RUB)"
                                                );
                                            }}
                                        >
                                            Russian ruble (RUB)
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            class="dropdown-item"
                                            onClick={() => {
                                                setCurrency(
                                                    "Saudi Arabian riyal   (SAR)"
                                                );
                                            }}
                                        >
                                            Saudi Arabian riyal (SAR)
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            class="dropdown-item"
                                            onClick={() => {
                                                setCurrency(
                                                    "Singapore dollar   (SGD)"
                                                );
                                            }}
                                        >
                                            Singapore dollar (SGD)
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            class="dropdown-item"
                                            onClick={() => {
                                                setCurrency(
                                                    "South African rand   (ZAR)"
                                                );
                                            }}
                                        >
                                            South African rand (ZAR)
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            class="dropdown-item"
                                            onClick={() => {
                                                setCurrency(
                                                    "Sri Lankan rupee   (LKR)"
                                                );
                                            }}
                                        >
                                            Sri Lankan rupee (LKR)
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            class="dropdown-item"
                                            onClick={() => {
                                                setCurrency(
                                                    "Swedish krona   (SEK)"
                                                );
                                            }}
                                        >
                                            Swedish krona (SEK)
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            class="dropdown-item"
                                            onClick={() => {
                                                setCurrency(
                                                    "Swiss franc   (CHF)"
                                                );
                                            }}
                                        >
                                            Swiss franc (CHF)
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            class="dropdown-item"
                                            onClick={() => {
                                                setCurrency(
                                                    "Thai baht   (THB)"
                                                );
                                            }}
                                        >
                                            Thai baht (THB)
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            class="dropdown-item"
                                            onClick={() => {
                                                setCurrency(
                                                    "Trinidadian dollar   (TTD)"
                                                );
                                            }}
                                        >
                                            Trinidadian dollar (TTD)
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            class="dropdown-item"
                                            onClick={() => {
                                                setCurrency(
                                                    "Tunisian dinar   (TND)"
                                                );
                                            }}
                                        >
                                            Tunisian dinar (TND)
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            class="dropdown-item"
                                            onClick={() => {
                                                setCurrency(
                                                    "U.A.E. dirham   (AED)"
                                                );
                                            }}
                                        >
                                            U.A.E. dirham (AED)
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            class="dropdown-item"
                                            onClick={() => {
                                                setCurrency(
                                                    "U.K. pound   (GBP)"
                                                );
                                            }}
                                        >
                                            U.K. pound (GBP)
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            class="dropdown-item"
                                            onClick={() => {
                                                setCurrency(
                                                    "U.S. dollar   (USD)"
                                                );
                                            }}
                                        >
                                            U.S. dollar (USD)
                                        </button>
                                    </li>

                                    <li>
                                        <button
                                            class="dropdown-item"
                                            onClick={() => {
                                                setCurrency(
                                                    "Uruguayan peso   (UYU)"
                                                );
                                            }}
                                        >
                                            Uruguayan peso (UYU)
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <button className="displayGraph">Show Stats</button>
                        </div>
                    )}
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
                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setCurrency(
                                                        "Botswana pula   (BWP)"
                                                    );
                                                }}
                                            >
                                                Botswana pula (BWP)
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setCurrency(
                                                        "Brazilian real   (BRL)"
                                                    );
                                                }}
                                            >
                                                Brazilian real (BRL)
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setCurrency(
                                                        "Brunei dollar   (BND)"
                                                    );
                                                }}
                                            >
                                                Brunei dollar (BND)
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setCurrency(
                                                        "Canadian dollar   (CAD)"
                                                    );
                                                }}
                                            >
                                                Canadian dollar (CAD)
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setCurrency(
                                                        "Chilean peso   (CLP)"
                                                    );
                                                }}
                                            >
                                                Chilean peso (CLP)
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setCurrency(
                                                        "Chinese yuan   (CNY)"
                                                    );
                                                }}
                                            >
                                                Chinese yuan (CNY)
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setCurrency(
                                                        "Colombian peso   (COP)"
                                                    );
                                                }}
                                            >
                                                Colombian peso (COP)
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setCurrency(
                                                        "Czech koruna   (CZK)"
                                                    );
                                                }}
                                            >
                                                Czech koruna (CZK)
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setCurrency(
                                                        "Danish krone   (DKK)"
                                                    );
                                                }}
                                            >
                                                Danish krone (DKK)
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setCurrency("Euro   (EUR)");
                                                }}
                                            >
                                                Euro (EUR)
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setCurrency(
                                                        "Hungarian forint   (HUF)"
                                                    );
                                                }}
                                            >
                                                Hungarian forint (HUF)
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setCurrency(
                                                        "Icelandic krona   (ISK)"
                                                    );
                                                }}
                                            >
                                                Icelandic krona (ISK)
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setCurrency(
                                                        "Indian rupee   (INR)"
                                                    );
                                                }}
                                            >
                                                Indian rupee (INR)
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setCurrency(
                                                        "Indonesian rupiah   (IDR)"
                                                    );
                                                }}
                                            >
                                                Indonesian rupiah (IDR)
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setCurrency(
                                                        "Iranian rial   (IRR)"
                                                    );
                                                }}
                                            >
                                                Iranian rial (IRR)
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setCurrency(
                                                        "Israeli New Shekel   (ILS)"
                                                    );
                                                }}
                                            >
                                                Israeli New Shekel (ILS)
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setCurrency(
                                                        "Japanese yen   (JPY)"
                                                    );
                                                }}
                                            >
                                                Japanese yen (JPY)
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setCurrency(
                                                        "Kazakhstani tenge   (KZT)"
                                                    );
                                                }}
                                            >
                                                Kazakhstani tenge (KZT)
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setCurrency(
                                                        "Korean won   (KRW)"
                                                    );
                                                }}
                                            >
                                                Korean won (KRW)
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setCurrency(
                                                        "Kuwaiti dinar   (KWD)"
                                                    );
                                                }}
                                            >
                                                Kuwaiti dinar (KWD)
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setCurrency(
                                                        "Libyan dinar   (LYD)"
                                                    );
                                                }}
                                            >
                                                Libyan dinar (LYD)
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setCurrency(
                                                        "Malaysian ringgit   (MYR)"
                                                    );
                                                }}
                                            >
                                                Malaysian ringgit (MYR)
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setCurrency(
                                                        "Mauritian rupee   (MUR)"
                                                    );
                                                }}
                                            >
                                                Mauritian rupee (MUR)
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setCurrency(
                                                        "Mexican peso   (MXN)"
                                                    );
                                                }}
                                            >
                                                Mexican peso (MXN)
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setCurrency(
                                                        "Nepalese rupee   (NPR)"
                                                    );
                                                }}
                                            >
                                                Nepalese rupee (NPR)
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setCurrency(
                                                        "New Zealand dollar   (NZD)"
                                                    );
                                                }}
                                            >
                                                New Zealand dollar (NZD)
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setCurrency(
                                                        "Norwegian krone   (NOK)"
                                                    );
                                                }}
                                            >
                                                Norwegian krone (NOK)
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setCurrency(
                                                        "Omani rial   (OMR)"
                                                    );
                                                }}
                                            >
                                                Omani rial (OMR)
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setCurrency(
                                                        "Pakistani rupee   (PKR)"
                                                    );
                                                }}
                                            >
                                                Pakistani rupee (PKR)
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setCurrency(
                                                        "Peruvian sol   (PEN)"
                                                    );
                                                }}
                                            >
                                                Peruvian sol (PEN)
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setCurrency(
                                                        "Polish zloty   (PLN)"
                                                    );
                                                }}
                                            >
                                                Polish zloty (PLN)
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setCurrency(
                                                        "Qatari riyal   (QAR)"
                                                    );
                                                }}
                                            >
                                                Qatari riyal (QAR)
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setCurrency(
                                                        "Russian ruble   (RUB)"
                                                    );
                                                }}
                                            >
                                                Russian ruble (RUB)
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setCurrency(
                                                        "Saudi Arabian riyal   (SAR)"
                                                    );
                                                }}
                                            >
                                                Saudi Arabian riyal (SAR)
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setCurrency(
                                                        "Singapore dollar   (SGD)"
                                                    );
                                                }}
                                            >
                                                Singapore dollar (SGD)
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setCurrency(
                                                        "South African rand   (ZAR)"
                                                    );
                                                }}
                                            >
                                                South African rand (ZAR)
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setCurrency(
                                                        "Sri Lankan rupee   (LKR)"
                                                    );
                                                }}
                                            >
                                                Sri Lankan rupee (LKR)
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setCurrency(
                                                        "Swedish krona   (SEK)"
                                                    );
                                                }}
                                            >
                                                Swedish krona (SEK)
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setCurrency(
                                                        "Swiss franc   (CHF)"
                                                    );
                                                }}
                                            >
                                                Swiss franc (CHF)
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setCurrency(
                                                        "Thai baht   (THB)"
                                                    );
                                                }}
                                            >
                                                Thai baht (THB)
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setCurrency(
                                                        "Trinidadian dollar   (TTD)"
                                                    );
                                                }}
                                            >
                                                Trinidadian dollar (TTD)
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setCurrency(
                                                        "Tunisian dinar   (TND)"
                                                    );
                                                }}
                                            >
                                                Tunisian dinar (TND)
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setCurrency(
                                                        "U.A.E. dirham   (AED)"
                                                    );
                                                }}
                                            >
                                                U.A.E. dirham (AED)
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setCurrency(
                                                        "U.K. pound   (GBP)"
                                                    );
                                                }}
                                            >
                                                U.K. pound (GBP)
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setCurrency(
                                                        "U.S. dollar   (USD)"
                                                    );
                                                }}
                                            >
                                                U.S. dollar (USD)
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                class="dropdown-item"
                                                onClick={() => {
                                                    setCurrency(
                                                        "Uruguayan peso   (UYU)"
                                                    );
                                                }}
                                            >
                                                Uruguayan peso (UYU)
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <button
                                className="displayGraph"
                                onClick={
                                    period === "Monthly"
                                        ? GetMonthly
                                        : GetYearly
                                }
                            >
                                Show Stats
                            </button>
                        </div>
                    )}
                </div>
                {/* <Linegraph/> */}
            </div>
        </div>
    );
};

export default Homescreen;
