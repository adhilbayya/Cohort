function wait(n) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Resolved After ${n} seconds`)
        }, n * 1000)
    })
}

wait(5).then(message => console.log(message))
.catch(err => console.error(err))