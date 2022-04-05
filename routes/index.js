const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Pitch = require("../models/pitch");
const Invest = require("../models/investor");
const ObjectId = mongoose.Types.ObjectId;

router.get("/pitches", (req, res) => {
    try {
        Pitch.aggregate([
            {
                $lookup: {
                    from: "investors",
                    localField: "_id",
                    foreignField: "pitchId",
                    as: "offers"
                }
            },
            {
                $addFields: {
                    id: "$_id",
                    offers: {
                        id: "$_id"
                    }
                }
            },
            {
                $project: {
                    _id: 0, __v: 0,
                    offers: {
                        _id: 0, __v: 0
                    }
                }
            }
        ])
            .then((data) => {
                res.status(200).send(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    catch {
        res.status(500).send("Internal Server Error");
    }
});

router.get("/pitches/:pitch_id", (req, res) => {
    try {
        Pitch.aggregate([
            {
                $match: { _id: ObjectId(req.params.pitch_id) }
            },
            {
                $lookup: {
                    from: "investors",
                    localField: "_id",
                    foreignField: "pitchId",
                    as: "offers"
                },
            },
            {
                $addFields: {
                    id: "$_id",
                    offers: {
                        id: "$_id"
                    }
                }
            },
            {
                $project: {
                    _id: 0, __v: 0,
                    offers: {
                        _id: 0, __v: 0
                    }
                }
            }
        ])
            .then((data) => {
                if (data.length > 0) {
                    res.status(200).send(data);
                }
                else {
                    res.status(404).send("Not Found");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
    catch {
        res.status(500).send("Internal Server Error");
    }
})

router.post("/pitches", (req, res) => {
    try {
        Pitch.create(req.body)
            .then(data => {
                res.status(201).json({
                    id: data._id
                });
            })
            .catch(() => {
                res.status(400).send("Invalid Request Body");
            });
    }
    catch {
        res.status(500).send("Internal Server Error");
    }
});

router.post("/pitches/:pitch_id/makeOffer", (req, res) => {
    try {
        Pitch.exists({ _id: req.params.pitch_id })
            .then((data) => {
                if (data === null) {
                    res.status(404).send("Not Found");
                }
                else {
                    req.body["pitchId"] = req.params.pitch_id;
                    Invest.create(req.body)
                        .then(data => {
                            res.status(201).json({
                                id: data.id
                            });
                        })
                        .catch(() => {
                            res.status(400).send("Invalid Request Body");
                        });
                }
            });
    }
    catch {
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;