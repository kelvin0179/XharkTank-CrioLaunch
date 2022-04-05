const mongoose = require('mongoose');
const { normalize } = require('path');

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

// pitchSchema.method('toClient', function () {
//     var obj = this.toObject();

//     //Rename fields
//     obj.id = obj._id;
//     delete obj._id;

//     return obj;
// });
module.exports = mongoose.model('Pitch', pitchSchema);
