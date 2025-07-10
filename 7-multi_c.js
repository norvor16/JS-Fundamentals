const arg = process.argv[2];
const times = parseInt(arg);

if (isNaN(times) || times <= 0) {
    console.log("Missing number of occurrences");
} else {
    let count = 0;
    while (count < times) {
        console.log("C is fun");
        count++;
    }
}
