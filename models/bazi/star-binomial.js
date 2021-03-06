'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let schema = new Schema({
        id: String,
        season: String,
        stem: String,
        branch: String,
        pinyin: String,
        chinese: String,
        description: String
    },
    {
        collection: 'bazi_star_binomial'
    });

module.exports = mongoose.model('BaZi Star Binomial', schema);