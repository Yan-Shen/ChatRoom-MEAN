var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');

var User = require('../models/user');
var Channel = require('../models/channel');
var Message = require('../models/message');
var ObjectId = require('mongoose').Types.ObjectId;

// where('name.last').equals('Ghost')

router.get('/', function (req, res, next) {
    // console.log('req-----', req)
    console.log('channelId-----', req.query.channelId)
    Message.find({'channel': ObjectId(req.query.channelId)})
        .populate('user', 'firstName')
        .populate('channel')
        .exec(function (err, messages) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: messages
            });
        });
});

// router.use('/', function (req, res, next) {
//     jwt.verify(req.query.token, 'secret', function (err, decoded) {
//         if (err) {
//             return res.status(401).json({
//                 title: 'Not Authenticated',
//                 error: err
//             });
//         }
//         next();
//     })
// });

router.post('/', function (req, res, next) {
    console.log('req.query------', req.query)
    var decoded = jwt.decode(req.query.token);
    User.findById(decoded.user._id, function (err, user) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }

        Channel.findById(req.query.channelId, function (err, channel) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred with channel',
                    error: err
                });
            }

            var message = new Message({
                content: req.body.content,
                user: user,
                channel: channel
            });
            message.save(function (err, result) {

                if (err) {
                    return res.status(500).json({
                        title: 'An error occurred',
                        error: err
                    });
                }
                console.log('result ------', result)
                console.log('user.messages ------', user.messages)
        // Document.prototype.toObject()
        //Converts this document into a plain javascript object, ready for storage in MongoDB.
                user.messages.push(result.toObject());

                channel.messages.push(result.toObject());

                user.save(function (err) {
                    if (err) {console.log('user save error---', err)};
                  });

                channel.save(function (err) {
                    if (err) {console.log('channle save error', err)};
                  });

                res.status(201).json({
                    message: 'Saved message',
                    obj: result
                });
            });
        })

    });
});

router.patch('/:id', function (req, res, next) {
    var decoded = jwt.decode(req.query.token);
    Message.findById(req.params.id, function (err, message) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!message) {
            return res.status(500).json({
                title: 'No Message Found!',
                error: {message: 'Message not found'}
            });
        }
        if (message.user != decoded.user._id) {
            return res.status(401).json({
                title: 'Not Authenticated',
                error: {message: 'Users do not match'}
            });
        }
        message.content = req.body.content;
        message.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Updated message',
                obj: result
            });
        });
    });
});

router.delete('/:id', function (req, res, next) {
    var decoded = jwt.decode(req.query.token);
    Message.findById(req.params.id, function (err, message) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!message) {
            return res.status(500).json({
                title: 'No Message Found!',
                error: {message: 'Message not found'}
            });
        }
        if (message.user != decoded.user._id) {
            return res.status(401).json({
                title: 'Not Authenticated',
                error: {message: 'Users do not match'}
            });
        }
        message.remove(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Deleted message',
                obj: result
            });
        });
    });
});

module.exports = router;
