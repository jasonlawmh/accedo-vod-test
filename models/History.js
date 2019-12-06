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
    }
});

module.exports = History = mongoose.model('history', HistorySchema);