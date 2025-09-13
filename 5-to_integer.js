// Get first argument
const arg = process.argv[2];

// Convert to integer using parseInt
const num = parseInt(arg);

// Check if result is NaN (Not a Number)
if (isNaN(num)) {
    console.log("Not a number");
} else {
    console.log(`My number: ${num}`);
}