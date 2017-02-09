function randomInteger(minI = 1, maxI = 5) {
    const min = Math.ceil(minI);
    const max = Math.floor(maxI);
    return Math.floor(Math.random() * (max - min)) + min;
};
exports.randomInteger = randomInteger;
exports.rand5 = () => randomInteger();
