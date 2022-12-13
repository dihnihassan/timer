console.log(process.argv);

const alarmClock = function(interval) {
  setTimeout(() => {
  process.stdout.write('\x07');
}, interval * 1000);
}
for (let i = 2; i < process.argv.length; i++) {
  alarmClock(process.argv[i]);
}

// // // alarm clock that will beep after a specified amount of time
// // // use setTimeOut
// // // should have input process.argv()
