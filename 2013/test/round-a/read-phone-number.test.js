const readPhoneNumber = require('../../round-a/read-phone-number/index');

describe('splitInput', () => {
    test('sample.in', () => {
        expect(
            readPhoneNumber.splitInput(`3
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
        expect(readPhoneNumber.solve('one')).toBe('one');
    });

    test('two', () => {
        expect(readPhoneNumber.solve('two')).toBe('two');
    });

    test('three', () => {
        expect(readPhoneNumber.solve('three')).toBe('three');
    });

    test('four', () => {
        expect(readPhoneNumber.solve('four')).toBe('four');
    });
});

describe('solveInputs', () => {
    test('sample.in', () => {
        expect(
            readPhoneNumber.solveInputs(`3
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
