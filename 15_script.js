function task(message) {
    let n = 1000000000;
    while (n > 0) {
        n--;
    }
    console.log(message);
}

console.log("Start script ...");
task('Download a file');
console.log('Done!');

console.log("Start script...");
setTimeout(() => {
    task('Download a file.');
}, 1000);
console.log('Done!');