const test = require('tape');
const random = require('./');

const inRange = (min, max, toCheck) => (min <= toCheck && toCheck <= max);
const isRand5 = (toCheck) => inRange(1, 5, toCheck);

test('randomInteger', (t) => {
    t.plan(3);
    t.ok(inRange(1, 3, random.randomInteger(1, 3)));
    t.ok(inRange(1, 2000, random.randomInteger(1, 2000)));
    t.ok(inRange(10, 5000, random.randomInteger(10, 5000)));
});


test('rand5', (t) => {
    t.plan(4);
    t.ok(isRand5(random.rand5()));
    t.ok(isRand5(random.rand5()));
    t.ok(isRand5(random.rand5()));
    t.ok(isRand5(random.rand5()));
});
