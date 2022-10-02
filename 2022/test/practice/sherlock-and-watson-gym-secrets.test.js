const sherlockAndWatsonGymSecrets = require('../../practice/sherlock-and-watson-gym-secrets/index');

describe('splitInput', () => {
    test.only('sample.in', () => {
        expect(
            sherlockAndWatsonGymSecrets.splitInput(`3
1 1 5 3
1 2 4 5
1 1 2 2`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                [1, 1, 5, 3],
                [1, 2, 4, 5],
                [1, 1, 2, 2],
            ]
        );
    });
});

describe('possibleValuesOfIAndJ', () => {
    test.only('5', () => {
        expect(sherlockAndWatsonGymSecrets.possibleValuesOfIAndJ(5)).toStrictEqual([
            [1, 2],
            [2, 1],
            [1, 3],
            [3, 1],
            [1, 4],
            [4, 1],
            [1, 5],
            [5, 1],
            [2, 3],
            [3, 2],
            [2, 4],
            [4, 2],
            [2, 5],
            [5, 2],
            [3, 4],
            [4, 3],
            [3, 5],
            [5, 3],
            [4, 5],
            [5, 4],
        ]);
    });

    test.only('4', () => {
        expect(sherlockAndWatsonGymSecrets.possibleValuesOfIAndJ(4)).toStrictEqual([
            [1, 2],
            [2, 1],
            [1, 3],
            [3, 1],
            [1, 4],
            [4, 1],
            [2, 3],
            [3, 2],
            [2, 4],
            [4, 2],
            [3, 4],
            [4, 3],
        ]);
    });

    test.only('2', () => {
        expect(sherlockAndWatsonGymSecrets.possibleValuesOfIAndJ(2)).toStrictEqual([[1, 2], [2, 1]]);
    });
});

describe('solve', () => {
    test('[1, 1, 5, 3]', () => {
        expect(sherlockAndWatsonGymSecrets.solve([1, 1, 5, 3])).toBe(8);
    });

    test('[1, 2, 4, 5]', () => {
        expect(sherlockAndWatsonGymSecrets.solve([1, 2, 4, 5])).toBe(3);
    });

    test('[1, 1, 2, 2]', () => {
        expect(sherlockAndWatsonGymSecrets.solve([1, 1, 2, 2])).toBe(0);
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
