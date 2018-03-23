var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');

var User = require('../models/user');
var Message = require('../models/message');
var Channel = require('../models/channel')

router.get('/', function (req, res, next) {
    Channel.find()
        .exec(function (err, channels) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                channels: 'Success',
                obj: channels
            });
        });
});

router.post('/', function (req, res, next) {
        var channel = new Channel({
            name: req.body.name,
            imgUrl: req.body.imgUrl
        });
        channel.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            // user.messages.push(result);
            // user.save();
            res.status(201).json({
                message: 'Saved channel',
                obj: result
            });
        });
});

module.exports = router
