const mongoose = require('mongoose');

const pitchSchema = new mongoose.Schema({
    entrepreneur: {
        type: String,
        required: true
    },
    pitchTitle: {
        type: String,
        required: true
    },
    pitchIdea: {
        type: String,
        required: true
    },
    askAmount: {
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
});


module.exports = mongoose.model('Pitch', pitchSchema);
