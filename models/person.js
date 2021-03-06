'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let collName = 'persons';

let personSchema = new Schema({
        name: String,
        surname: String,
        date: {
            year: {type: Number, min: 1, max: 9999},
            month: {type: Number, min: 1, max: 12},
            day: {type: Number, min: 1, max: 31},
            hour: {type: Number, min: 0, max: 23},
            minutes: {type: Number, min: 0, max: 59}
        },
        tz: Number,
        birth_city: String,
        dst_active_at_birth: Boolean,
        longitude: {type: Number, min: -360.0, max: 360.0},
        analystId: String,
        gender: String,
        notes: String,
        lastUpdated: {type: Date, default: Date.now}
    },
    {
        collection: collName
    });

module.exports = mongoose.model('Person', personSchema);