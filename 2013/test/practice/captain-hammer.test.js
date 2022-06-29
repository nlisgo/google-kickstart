const captainHammer = require('../../practice/captain-hammer/index');

describe('splitInput', () => {
    test('sample.in', () => {
        expect(
            captainHammer.splitInput(`3
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
        expect(captainHammer.solve('one')).toBe('one');
    });

    test('two', () => {
        expect(captainHammer.solve('two')).toBe('two');
    });

    test('three', () => {
        expect(captainHammer.solve('three')).toBe('three');
    });

    test('four', () => {
        expect(captainHammer.solve('four')).toBe('four');
    });
});

describe('solveInputs', () => {
    test('sample.in', () => {
        expect(
            captainHammer.solveInputs(`3
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
