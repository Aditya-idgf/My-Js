// For loop
let arr = [1, 2, 3, 4, 5, 6];

// Loop through the array and log each element
for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
}

// Loop from 1 to 9, and break when reaching 5
for (let i = 1; i < 10; i++) {
    if (i === 5) {
        // console.log("We have reached 5");
        break; // Stops the loop when i == 5
    }
    // console.log(i);
}

// Loop from 1 to 9, skipping 5
for (let i = 1; i < 10; i++) {
    if (i === 5) {
        // console.log("Skipping 5");
        continue; // Skips the rest of the iteration when i == 5
    }
    // console.log(i);
}

// While loop
let i = 0;
while (i < arr.length) {
    // console.log(arr[i]);
    i++; // Increment to avoid an infinite loop
}

// Do-While loop
i = 0;
do {
    // console.log(arr[i]);
    i = i + 2; // Skips every second element
} while (i < arr.length);
