
function waitOneSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Resolved After 1 sec")
        }, 1000)
    })
}

function waitTwoSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Resolved After 2 sec")
        }, 2000)
    })
}

function waitThreeSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Resolved After 3 sec")
        }, 3000)
    })
}

function calculateTime() {
    let startTime = Date.now();
    Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]).then(() => {
        let endTime = Date.now();
        let ElapsedTime = (endTime - startTime ) / 1000
        console.log(`The total elapsed time is : ${ElapsedTime} s`)
    }).catch(err => console.error(err))
}

calculateTime()