function humanReadable(seconds) {
    let n = seconds;
    let hours = 0;
    let min = 0;
    let sec = 0;
    while (n > 0) {
        sec++;
        if (sec > 59) {
            min++;
            sec = 0;
        }
        if (min > 59) {
            hours++;
            min = 0;
        }
        n--;
    }
    let human_hours = "" + hours;
    let human_min = "" + min;
    let human_sec = "" + sec;
    if (human_hours.length < 2) human_hours = '0' + human_hours;
    if (human_min.length < 2) human_min = '0' + min;
    if (human_sec.length < 2) human_sec = '0' + sec;
    console.log(`${human_hours}:${human_min}:${human_sec}`);
}



humanReadable(980983);