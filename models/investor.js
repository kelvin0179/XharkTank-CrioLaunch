const mongoose = require('mongoose')

const investorSchema = new mongoose.Schema({
    investor: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true,
        min: 0
    },
    equity: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    comment: {
        type: String,
        required: true
    },
    pitchId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'pitch',
    }
});

module.exports = mongoose.model('Investor', investorSchema);