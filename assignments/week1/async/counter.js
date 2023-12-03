let timer = 1
function counter(){
    console.clear()
    console.log(timer)
    timer += 1
}

setInterval(counter, 1000)
