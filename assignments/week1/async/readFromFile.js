let fs = require('fs');

function readFileandRead(filePath){
    fs.readFile(filePath, 'utf8', (err, data) => {
        if(err){
            console.error("Error reading the file : ",err)
            return 
        }

        console.log("File content : ")
        console.log(data)

        let startTime = new Date()
        let sum = 0
        for(let i = 0; i < 1000000000; i++){
            sum += i
        }

        let endTime = new Date()
        let timeTaken = (endTime - startTime)/1000

        console.log(timeTaken)
    })
}

const path = 'C:/Users/adhil/OneDrive/Desktop/Java Projects/src/hey.txt'
readFileandRead(path)