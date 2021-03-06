/**
 * Accepts an array of lines and organises into separate cases.
 */
const splitInput = input => {
    const cases = [];

    input.slice(1).forEach((i, pos) => {
        if (pos % 2) {
            cases.push(i.split(' ').map(Number));
        }
    });

    return cases;
};

/**
 * Accepts a single input case and returns the result as a string.
 */
const solve = input => {
    let sorted = input;
    let odds = [];
    let evens = [];

    input.forEach(i => {
        (i % 2 ? odds : evens).push(i);
    });

    odds = odds.sort((a, b) => a - b);
    evens = evens.sort((a, b) => b - a);

    input.forEach((i, pos) => {
        sorted[pos] = (i % 2 ? odds : evens).shift();
    });

    return sorted.join(' ');
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
	splitInput,
	solve,
	solveInputs,
};
