function waitOneSec(){
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve("Resolved After 1 sec")
        }, 1000)
    })
}
function waitTwoSec(){
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve("Resolved After 2 sec")
        }, 2000)
    })
}
function waitThreeSec(){
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve("Resolved After 3 sec")
        }, 3000)
    })
}

function calculate(){
    let startTime = Date.now();
    waitOneSec().then((message) => {
        console.log(message)
        return waitTwoSec()
    }).then((message) => {
        console.log(message)
        return waitThreeSec()
    }).then((message) => {
        console.log(message)
        let endTime = Date.now()
        let elapsedTime = (endTime - startTime) / 1000
        console.log(`The total time : ${elapsedTime} s`)
    })

}

calculate()