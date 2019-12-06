const express = require('express');
const router = express.Router();

//History Model
const History = require('../../models/History');

// @route  GET api/history
// @desc   Get All History
// @access Public
router.get('/', (req, res) => {
    History.find()
        .sort({date: -1})
        .then(records => res.json(records));
});

// @route  POST api/history
// @desc   Create a new view record
// @access Public
router.post('/', (req, res) => {
    const newRecord = new History({
        name: req.body.name
    });

    newRecord.save().then(record => res.json(record));
});

// @route  DELETE api/history
// @desc   Delete a view record
// @access Public
router.delete('/:id', (req, res) => {
    History.findById(req.params.id)
        .then(record => record.remove().then(() => res.json({success : true})))
        .catch(err => res.status(404).json({success: false}));
});

module.exports = router;