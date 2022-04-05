const express = require("express");
const router = express.Router();
const Pitch = require("../models/pitch");
const Invest = require("../models/investor");

router.get("/", (req, res) => {
    res.send("Hello");
});

router.post("/pitches", (req, res) => {
    try {
        Pitch.create(req.body)
            .then(data => {
                res.status(201).json({
                    id: data._id
                });
            })
            .catch(() => {
                res.status(400).send("Bad Request");
            });
    }
    catch {
        res.status(500).send("Internal Server Error");
    }
});

router.post("/pitches/:pitch_id/makeOffer", (req, res) => {
    try {
        req.body["pitchId"] = req.params.pitch_id;
        Invest.create(req.body)
            .then(data => {
                res.status(201).json({
                    id: data._id
                });
            })
            .catch(() => {
                res.status(400).send("Bad Request");
            });
    }
    catch {
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;