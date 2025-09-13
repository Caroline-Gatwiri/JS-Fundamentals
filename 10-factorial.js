// Get and convert the argument to integer
const arg = parseInt(process.argv[2]);

// If NaN, default to 1 (as per requirement: "Factorial of NaN is 1")
const n = isNaN(arg) ? 1 : arg;

// Recursive factorial function
function factorial(num) {
    if (num <= 1) {
        return 1;
    }
    return num * factorial(num - 1);
}

console.log(factorial(n));