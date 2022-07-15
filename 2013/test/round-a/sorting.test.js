const sorting = require('../../round-a/sorting/index');

describe('splitInput', () => {
    test('sample.in', () => {
        expect(
            sorting.splitInput(`2
5
5 2 4 3 1
7
-5 -12 87 2 88 20 11`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                [
                    5,
                    2,
                    4,
                    3,
                    1,
                ],
                [
                    -5,
                    -12,
                    87,
                    2,
                    88,
                    20,
                    11,
                ],
            ]
        );
    });
});

describe('solve', () => {
    test('[5, 2, 4, 3, 1]', () => {
        expect(sorting.solve([5, 2, 4, 3, 1])).toBe('1 4 2 3 5');
    });

    test('[-5, -12, 87, 2, 88, 20, 11]', () => {
        expect(sorting.solve([-5, -12, 87, 2, 88, 20, 11])).toBe('-5 88 11 20 2 -12 87');
    });
});

describe('solveInputs', () => {
    test('sample.in', () => {
        expect(
            sorting.solveInputs(`2
5
5 2 4 3 1
7
-5 -12 87 2 88 20 11`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                'Case #1: 1 4 2 3 5',
                'Case #2: -5 88 11 20 2 -12 87',
            ]
        );
    });
});
