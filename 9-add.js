// Define add function
function add(a, b) {
    return a + b;
}

// Get arguments
const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[3]);

// Call function and log result
console.log(add(num1, num2));