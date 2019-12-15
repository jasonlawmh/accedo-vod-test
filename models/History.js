const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const HistorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    playedSeconds: {
        type: Number,
        default: 0.0
    }
});

module.exports = History = mongoose.model('history', HistorySchema);