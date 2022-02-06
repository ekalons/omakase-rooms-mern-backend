const express = require('express');
const router = express.Router();
const Room = require('../models/room');

router.get('/rooms', (req, res, next) => {
    Room.find({})
    .then((data) => res.json(data))
    .catch(next);
});

router.post('/rooms', (req, res, next) => {
    if (req.body.name) {
        Room.create(req.body)
        .then((data) => res.json(data))
        .catch(next);
    } else {
    res.json({
        error: 'The input field is empty',
    });
    }
});

router.delete('/rooms/:id', (req, res, next) => {
    Room.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;

