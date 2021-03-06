var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' }).single('image');

var User = require('../models/user');

router.post('/', function (req, res, next) {
    var user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: bcrypt.hashSync(req.body.password, 10),
        email: req.body.email
    });
    user.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'User created',
            obj: result
        });
    });
});


router.post('/profile', function (req, res, next) {
    var path = '';
    upload(req, res, function (err) {
       if (err) {
        return res.status(500).json({
            title: 'An error occurred',
            error: err
        });
       }
      // No error occured.
      console.log('req.file----', req.file)
       path = req.file.path;
       res.status(201).json({
        message: "Upload Completed for "+path,
    });
 });
});

router.post('/signin', function(req, res, next) {
    User.findOne({email: req.body.email}, function(err, user) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!user) {
            return res.status(401).json({
                title: 'Login failed',
                error: {message: 'Invalid login credentials'}
            });
        }
        if (!bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(401).json({
                title: 'Login failed',
                error: {message: 'Invalid login credentials'}
            });
        }
        var token = jwt.sign({user: user}, 'secret', {expiresIn: 36000});
        res.status(200).json({
            message: 'Successfully logged in',
            token: token,
            userId: user._id,
            userFirstName: user.firstName,
            userLastName: user.lastName,
        });
    });
});

module.exports = router;
