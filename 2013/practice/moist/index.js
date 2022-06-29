/**
 * Accepts an array of lines and organises into separate cases.
 */
const splitInput = input => {
    const cases = [];
    let c = [];
    input.forEach(i => {
        if (isNaN(i)) { 
            c.push(i);
        } else if (c.length > 0) {
            cases.push(c);
            c = [];
        }
    });

    cases.push(c);

    return cases;
};

/**
 * Accepts a single input case and returns the result as a string.
 */
const solve = input => {
    let curr = input;
    let co = 0;
    for (let i = 1; i < curr.length; i++) {
        let before = [curr[i-1], curr[i]];
        let after = [...before].sort();
        if (before[0] !== after[0]) {
            co++;
            curr = [...curr.slice(0, i + 1)].sort();
            curr.push(...input.slice(i + 1));
        }
    }
    return co;
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
