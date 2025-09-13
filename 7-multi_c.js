// Get first argument
const arg = process.argv[2];

// Convert to integer
const count = parseInt(arg);

// Check if invalid
if (isNaN(count)) {
    console.log("Missing number of occurrences");
} else {
    // Print "C is fun" 'count' times (if count > 0)
    for (let i = 0; i < count; i++) {
        console.log("C is fun");
    }
}