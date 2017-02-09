// Piglatin
// 1. if a word begins with a consonant, append it to the end and add ay
// 2. if not add way
const test = require('tape');

function translateWord(word) {
    let isCalitalized = /^[A-Z]/.test(word);

    let result = word.toLowerCase();
    const beginsWithConsonant = /^([^aeiou])(.*)$/;
    if (beginsWithConsonant.test(result)) {
        while (beginsWithConsonant.test(result)) {
            const parts = result.match(beginsWithConsonant, '$1$0ay');
            result = `${parts[2]}${parts[1]}`;
        }
        result = `${result}ay`;
    } else {
        result = `${result}way`;
    }

    if (isCalitalized) {
        result = `${result.substring(0, 1).toUpperCase()}${result.substring(1)}`;
    }
    return result;
}

function translate(phrase) {
    return phrase.split(' ').map(word => {
        return word.replace(/\w+/, (match, index) => {
            return `${word.substring(0, index - 1)}${translateWord(match)}${word.substring(index + match.length)}`;
        });
    }).join(' ');
}


test('first rule', (t) => {
    t.equal(translate('paper'), 'aperpay');
    t.equal(translate('Steven'), 'Evenstay');
    t.equal(translate('even'), 'evenway');
    t.equal(translate('brunch'), 'unchbray');
    t.equal(translate('school'), 'oolschay');
    t.equal(translate('Apple'), 'Appleway');
    t.equal(translate('Marley ate a banana'), 'Arleymay ateway away ananabay');
    t.equal(translate('Marley:-) said, "eat the banana!"'), 'Arleymay:-) aidsay, "eatway ethay ananabay!"');
    t.end();
});
