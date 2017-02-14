const test = require( 'tape');


function throttle(fn, delay, context = fn) {
    let timeoutId;

    return (...args) => {

        if (!timeoutId) {
            fn.apply(context, args);
            timeoutId = setTimeout(() => {
                clearTimeout(timeoutId);
                timeoutId = null;
            }, delay);
        }
    }
}

test('throttle', (t) => {
    let calls = 0;
    t.plan(3);

    const fn = throttle(() => { calls++; }, 1);
    t.equal(calls, 0);
    fn();
    fn();
    t.equal(calls, 1);
    setTimeout(() => {
        fn();
        fn();
        t.equal(calls, 2)
    }, 2);
});

const debounce = (fn, delay, context = fn) => {
    let last = 0;
    let timeoutId;
    return (...args) => {
        const now = Date.now();
        if (last && now < last + delay) {
            if (timeoutId) clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                last = now;
                fn.apply(context, args);
            }, delay + last - now);
        } else {
            last = now;
            fn.apply(context, args);
        }
    };
};

test('debounce', (t) => {
    let calls = 0
    t.plan(2);
    const fn = debounce(() => { calls++; }, 1);
    fn();
    t.equal(calls, 1);
    fn();
    fn();
    t.equal(calls, 1);
    setTimeout(() => {
        fn();
        t.equal(calls, 2);
    }, 1);
});
