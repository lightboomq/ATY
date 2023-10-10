let time = 1200

function count(){
    let minutes = Math.floor(time/60)
    let seconds = time % 60
    seconds = seconds < 10 ? "0" + seconds: seconds
    console.log(`${minutes}:${seconds}`);
    time--
}
setInterval(count,1000)