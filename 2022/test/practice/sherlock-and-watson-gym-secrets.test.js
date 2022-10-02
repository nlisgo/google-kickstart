const sherlockAndWatsonGymSecrets = require('../../practice/sherlock-and-watson-gym-secrets/index');

describe('splitInput', () => {
    test('sample.in', () => {
        expect(
            sherlockAndWatsonGymSecrets.splitInput(`3
1 1 5 3
1 2 4 5
1 1 2 2`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                [1n, 1n, 5n, 3n],
                [1n, 2n, 4n, 5n],
                [1n, 1n, 2n, 2n],
            ]
        );
    });
});

describe('possibleValuesOfIAndJ', () => {
    test('5', () => {
        expect(sherlockAndWatsonGymSecrets.possibleValuesOfIAndJ(5n)).toStrictEqual([
            [1n, 2n],
            [2n, 1n],
            [1n, 3n],
            [3n, 1n],
            [1n, 4n],
            [4n, 1n],
            [1n, 5n],
            [5n, 1n],
            [2n, 3n],
            [3n, 2n],
            [2n, 4n],
            [4n, 2n],
            [2n, 5n],
            [5n, 2n],
            [3n, 4n],
            [4n, 3n],
            [3n, 5n],
            [5n, 3n],
            [4n, 5n],
            [5n, 4n],
        ]);
    });

    test('4', () => {
        expect(sherlockAndWatsonGymSecrets.possibleValuesOfIAndJ(4)).toStrictEqual([
            [1n, 2n],
            [2n, 1n],
            [1n, 3n],
            [3n, 1n],
            [1n, 4n],
            [4n, 1n],
            [2n, 3n],
            [3n, 2n],
            [2n, 4n],
            [4n, 2n],
            [3n, 4n],
            [4n, 3n],
        ]);
    });

    test('2', () => {
        expect(sherlockAndWatsonGymSecrets.possibleValuesOfIAndJ(2)).toStrictEqual([[1n, 2n], [2n, 1n]]);
    });
});

describe('solve', () => {
    test('[1, 1, 5, 3]', () => {
        expect(sherlockAndWatsonGymSecrets.solve([1n, 1n, 5n, 3n])).toBe(8);
    });

    test('[1, 2, 4, 5]', () => {
        expect(sherlockAndWatsonGymSecrets.solve([1n, 2n, 4n, 5n])).toBe(3);
    });

    test('[1, 1, 2, 2]', () => {
        expect(sherlockAndWatsonGymSecrets.solve([1n, 1n, 2n, 2n])).toBe(0);
    });
});

describe('solveInputs', () => {
    test('sample.in', () => {
        expect(
            sherlockAndWatsonGymSecrets.solveInputs(`3
1 1 5 3
1 2 4 5
1 1 2 2`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                'Case #1: 8',
                'Case #2: 3',
                'Case #3: 0',
            ]
        );
    });
});
