// Get size argument
const sizeArg = process.argv[2];

// Convert to integer
const size = parseInt(sizeArg);

// Validate
if (isNaN(size)) {
    console.log("Missing size");
} else if (size > 0) {
    // Create a row of 'X's
    const row = 'X'.repeat(size);
    // Print it 'size' times
    for (let i = 0; i < size; i++) {
        console.log(row);
    }
}