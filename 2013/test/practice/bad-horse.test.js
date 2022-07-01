const badHorse = require('../../practice/bad-horse/index');

describe('splitInput', () => {
    test('sample.in', () => {
        expect(
            badHorse.splitInput(`3
one
two
three`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                'one',
                'two',
                'three',
            ]
        );
    });
});

describe('solve', () => {
    test('one', () => {
        expect(badHorse.solve('one')).toBe('one');
    });

    test('two', () => {
        expect(badHorse.solve('two')).toBe('two');
    });

    test('three', () => {
        expect(badHorse.solve('three')).toBe('three');
    });

    test('four', () => {
        expect(badHorse.solve('four')).toBe('four');
    });
});

describe('solveInputs', () => {
    test('sample.in', () => {
        expect(
            badHorse.solveInputs(`3
one
two
three`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                'Case #1: one',
                'Case #2: two',
                'Case #3: three',
            ]
        );
    });
});
