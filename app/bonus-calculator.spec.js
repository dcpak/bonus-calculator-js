const bonusCalculator = require('./bonus-calculator');
const teamBonusCalculator = require('./team-bonus-calculator');

describe('Bonus calculation', function () {

    [
        {
            sales: 12000,
            quota: 11000,
            commission: 10,
            tax: 10,
            result: 90
        },
        {
            sales: 13000,
            quota: 15000,
            commission: 10,
            tax: 10,
            result: 0
        },
        {
            sales: 15000,
            quota: 15000,
            commission: 10,
            tax: 10,
            result: 0
        }
    ].forEach(function(params) {
        it('bonus for sales ' + params.sales + ' with quota ' + params.quota + ', commission ' + params.commission + ' tax ' + params.tax + ' equals ' + params.result, function() {
            expect(bonusCalculator(params)).toEqual(params.result);
        });

    });

    [
        {
            sales: 12000,
            quota: 11000,
            commission: 10,
            members: 4,
            result: 25
        },
        {
            sales: 12000,
            quota: 11000,
            commission: 50,
            members: 5,
            result: 100
        },
        {
            sales: 13000,
            quota: 15000,
            commission: 10,
            members: 4,
            result: 0
        },
        {
            sales: 12000,
            quota: 12000,
            commission: 10,
            members: 4,
            result: 0
        },
        {
            sales: 12000,
            quota: 11000,
            commission: 10,
            members: 0,
            result: 0
        }
    ].forEach(function(params) {
        it('bonus for sales ' + params.sales + ' with quota ' + params.quota + ', commission ' + params.commission + ' members ' + params.members + ' equals ' + params.result, function() {
            expect(teamBonusCalculator(params)).toEqual(params.result);
        });

    });

});
