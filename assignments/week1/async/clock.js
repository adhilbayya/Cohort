function clock(){
    let now = new Date()
    let hour = now.getHours()
    let min = now.getMinutes()
    let sec = now.getSeconds()

    hour = hour < 10 ? '0'+hour : hour
    min = min < 10 ? '0'+min : min
    sec = sec < 10 ? '0'+sec : sec

    let formattedTime = `${hour} : ${min} : ${sec} AM`
    if(hour > 12){
        formattedTime = `${hour - 12} : ${min} : ${sec} PM`
    }

    console.clear()
    console.log(formattedTime);

}

setInterval(clock, 1000)