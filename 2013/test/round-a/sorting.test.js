const sorting = require('../../round-a/sorting/index');

describe('splitInput', () => {
    test('sample.in', () => {
        expect(
            sorting.splitInput(`3
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
        expect(sorting.solve('one')).toBe('one');
    });

    test('two', () => {
        expect(sorting.solve('two')).toBe('two');
    });

    test('three', () => {
        expect(sorting.solve('three')).toBe('three');
    });

    test('four', () => {
        expect(sorting.solve('four')).toBe('four');
    });
});

describe('solveInputs', () => {
    test('sample.in', () => {
        expect(
            sorting.solveInputs(`3
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
