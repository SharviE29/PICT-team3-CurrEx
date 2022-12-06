const express = require("express");
const client = require("./db");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/ping", (req, res) => {
    res.send("pong");
});

app.post("/graph/yearly", async (req, res) => {
    let from_year = "Year_";
    from_year += req.body.year1;


    currency = req.body.currency;

    dbname1 = req.body.year1;

    try {
        const db = client.db("new_test");
        const col1 = db.collection(dbname1 + "_data");


        const data1 = await col1
            .aggregate([
                { $unwind: "$" + from_year },
                { $group: { _id: "$" + from_year } },
                { $match: { "_id.CURR": currency } },
            ])
            .toArray();

        // const data2 = await col2
        //     .aggregate([
        //         { $unwind: "$" + to_year },
        //         { $group: { _id: "$" + to_year } },
        //         // {$match : {"_id.CURR" : currency}},
        //     ])
        //     .toArray();

        res.json({ data1: data1 });
    } catch (error) {
        console.log(error);
    }
});

app.post("/graph/monthly", async (req, res) => {
    let year = "Year_";
    year += req.body.year;
    currency = req.body.currency;

    dbname = req.body.year;

    try {
        const db = client.db("new_test");
        const col = db.collection(dbname + "_data");

        const data = await col
            .aggregate([
                { $unwind: "$monthly" },
                { $group: { _id: "$monthly" } },
                { $unwind: "$_id.Jan" },
                { $match: { "_id.Jan.currency": currency } },
                { $unwind: "$_id.Feb" },
                { $match: { "_id.Feb.currency": currency } },
                { $unwind: "$_id.Mar" },
                { $match: { "_id.Mar.currency": currency } },
                { $unwind: "$_id.Apr" },
                { $match: { "_id.Apr.currency": currency } },
                { $unwind: "$_id.May" },
                { $match: { "_id.May.currency": currency } },
                { $unwind: "$_id.Jun" },
                { $match: { "_id.Jun.currency": currency } },
                { $unwind: "$_id.Jul" },
                { $match: { "_id.Jul.currency": currency } },
                { $unwind: "$_id.Aug" },
                { $match: { "_id.Aug.currency": currency } },
                { $unwind: "$_id.Sep" },
                { $match: { "_id.Sep.currency": currency } },
                { $unwind: "$_id.Oct" },
                { $match: { "_id.Oct.currency": currency } },
                { $unwind: "$_id.Nov" },
                { $match: { "_id.Nov.currency": currency } },
                { $unwind: "$_id.Dec" },
                { $match: { "_id.Dec.currency": currency } },

                // {$group: {_id: "$_id.Jan"}},
                // {$match: {"_id.currency": currency}},
                // {$group: {_id: "$_id"}}
                // {$match: {_id: "$_id.Jan."+currency}},
            ])
            .toArray();

        res.send(data);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
});

app.post("/curr/", async (req, res) => {
    let year = "Year_";
    year += req.body.year;

    dbname = req.body.year;

    console.log(dbname);

    try {
        const db = client.db("new_test");
        const col = db.collection(dbname + "_data");
        const data = await col
            .aggregate([
                { $unwind: "$" + year },
                { $group: { _id: "$" + year } },
                { $group: { _id: "$_id.CURR" } },
            ])
            .toArray();

        res.send(data);
    } catch (error) {
        console.log(error);
    }
});

app.listen(7000, () => {
    console.log("Api running on 9000");
});