function formatTime(time) {
    let days = Math.floor(time / 1440);
    time -= days * 1440;
    let hours = Math.floor(time / 60);
    time -= hours * 1440;
    let minutes = time;

    return days + ' day(s) ' + hours + ' hour(s) ' + minutes + ' minute(s).'
}

console.log(formatTime(3601));