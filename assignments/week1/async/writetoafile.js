let fs = require('fs')
function writingToFile(content, dir){
    fs.writeFile(dir, content, 'utf8', (err, data) => {
        if(err){
            console.error("Unable to read the file : ",err)
            return
        }
        console.log("Content has been written")
    })
}

let dir = 'C:/Users/adhil/OneDrive/Desktop/Java Projects/src/hey.txt'
let content = "Added some more stuff in this file using js"

writingToFile(content, dir)