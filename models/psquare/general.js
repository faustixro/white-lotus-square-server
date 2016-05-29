'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
        number: {type: Number, min: 0, max: 9},
        title: String,
        description: String,
        details: String,
        element: String,
        gender: String,
        'zodiac 1': String,
        'verb 1': String,
        'zodiac 2': String,
        'verb 2': String
    },
    {
        collection: 'general'
    });

module.exports = mongoose.model('GeneralNumbers', schema);