/**
 * Accepts an array of lines and organises into separate cases.
 */
const splitInput = input => input.slice(1).map(i => i.split(' ').map(Number));

/**
 * Accepts a single input case and returns the result as a string.
 */
const solve = input => {
    [A, B, N, K] = input;
    let getAlong = 0;
    possibleValuesOfIAndJ(N).forEach(possible => {
        [i, j] = possible;
        if ((i^A + j^B) % K === 0) {
            getAlong++;
        }
    });

    return getAlong;
};

/**
 * Accepts all lines of input and prepares all solutions.
 */
const solveInputs = inputs => {
	const cases = [];
	splitInput(inputs).forEach((data, i) => {
		cases.push(`Case #${i+1}: ${solve(data)}`);
	});
	return cases;
};

/**
 * All possible values for i and j. 
 */
const possibleValuesOfIAndJ = N => {
    const values = [];
    for (let i = 1; i <= N; i++) {
        for (let j = i + 1; j <= N; j++) {
            values.push([i, j]);
            values.push([j, i]);
        }
    }

    return values;
};

/**
 * If stdin is detected then pass all lines to solveInputs.
 * 
 * Send results to stdout.
 */
if (!Boolean(process.stdin.isTTY)) {
    const lines = [];
    require('readline').createInterface({
        input: process.stdin,
    }).on('line', line => {
        lines.push(line);
    }).on('close', () => {
        solveInputs(lines).forEach(line => {
            console.log(line);
        });
    });
}

/**
 * Export all functions that we want to test.
 */
module.exports = {
    possibleValuesOfIAndJ,
	splitInput,
	solve,
	solveInputs,
};
