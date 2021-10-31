function timeToWalk(meters, step, stepsInKm) {
    const distance = meters * step;
    let time = (distance/stepsInKm) * 3.6;
    let breaks = Math.floor(distance / 500) * 60;
    time += breaks;
    let seconds = time % 60;
    time -= seconds;
    let minutes = (time / 60) % 60;
    time -= minutes * 60;
    let hours = time / 3600;
    console.log(`${str_pad(hours)}:${str_pad(minutes)}:${str_pad(seconds.toFixed(0))}`); 
    function str_pad(n) {
        if (n < 10) {
            return "0"+n;
        }
        else {
            return n;
        }
    }
}
timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);