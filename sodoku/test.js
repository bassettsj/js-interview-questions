const test = require('tape');
const sodoku = require('./');

const correct = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [4, 5, 6, 7, 8, 9, 1, 2, 3],
  [7, 8, 9, 1, 2, 3, 4, 5, 6],
  [2, 3, 4, 5, 6, 7, 8, 9, 1],
  [5, 6, 7, 8, 9, 1, 2, 3, 4],
  [8, 9, 1, 2, 3, 4, 5, 6, 7],
  [3, 4, 5, 6, 7, 8, 9, 1, 2],
  [6, 7, 8, 9, 1, 2, 3, 4, 5],
  [9, 1, 2, 3, 4, 5, 6, 7, 8],
];



test('checkSet', (t) => {
    t.plan(4);
    const base = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    t.ok(sodoku.checkSet(base));
    t.notOk(sodoku.checkSet([1, 2, 3, 4, 5, 6, 7, 8, 8]));
    t.ok(sodoku.checkSet(base.reverse()));
    t.notOk(sodoku.checkSet([1, 2, 3, 4, 5, 6, 7, 8, 10]));
});



test.skip('checker', (t) => {
    t.plan(2);
    t.ok(sodoku.check(correct));
    const incorrect = [
         [9, 2, 3, 4, 5, 6, 7, 8, 1],
        ...correct.slice(1),
    ]
    t.notOk(sodoku.check(incorrect));
});
