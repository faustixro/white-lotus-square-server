'use strict';

let moment = require('moment-timezone');
let _ = require('lodash');

let stars = function () {
    function getBinomialStarOfDay(chart, stars) {
        let result = {};
        let seasonId = chart.month.eb;
        let dm = chart.day.hs;
        let dayBranch = chart.day.eb;
        // SteleBinomZi
        _.each(stars, function (star) {
            if ((star.season === seasonId && star.hs === dm && star.eb === dayBranch) ||
                (_.isUndefined(star.season) && star.hs === dm && star.eb === dayBranch)) {
                result[star.category] = star;
            }
        });
        return result;
    }

    function checkItem(chart, pillar, item, symStar, result) {
        if (!result.pillars) {
            result.pillars = [];
        }
        if (chart[pillar] && chart[pillar][item] === symStar) {
            result.pillars.push(pillar);
        }
    }

    function isSymbolicStarPresent(chart, symStar, type) {
        let result = {};
        switch (type) {
            case 'dayMaster':
                // SteleSimbSZ
                checkItem(chart, 'year', 'eb', symStar, result);
                checkItem(chart, 'month', 'eb', symStar, result);
                checkItem(chart, 'day', 'eb', symStar, result);
                checkItem(chart, 'hour', 'eb', symStar, result);
                break;
            case 'dayBranch':
                // SteleSimbRamZi
                checkItem(chart, 'year', 'eb', symStar, result);
                checkItem(chart, 'month', 'eb', symStar, result);
                checkItem(chart, 'hour', 'eb', symStar, result);
                break;
            case 'season':
                // SteleSimbSezon
                checkItem(chart, 'year', 'hs', symStar, result);
                checkItem(chart, 'day', 'hs', symStar, result);
                checkItem(chart, 'hour', 'hs', symStar, result);
                checkItem(chart, 'year', 'eb', symStar, result);
                checkItem(chart, 'day', 'eb', symStar, result);
                checkItem(chart, 'hour', 'eb', symStar, result);
                break;
            case 'heavenlyDoctor':
                // SteleSimbDoctorCeresc
                checkItem(chart, 'day', 'eb', symStar, result);
                break;
            case 'extPeachBlossom':
                // SteleSimbFloareDePiersicExt
                checkItem(chart, 'hour', 'eb', symStar, result);
                break;
            default:
                throw new TypeError('Unknown type: ' + type);
        }
        result.star = symStar;
        result.type = type;
        return result;
    }

    return {
        getBinomialStarOfDay: getBinomialStarOfDay,
        isSymbolicStarPresent: isSymbolicStarPresent
    };
};

module.exports = stars;