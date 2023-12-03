let fs = require('fs')

function modifyFile(dir){
    fs.readFile(dir, 'utf-8', (err, data) => {
        if(err){
            console.error("Unable to read file : ",err)
            return
        }

        let modifiedFile = data.replace(/\s+/g, ' ')

    fs.writeFile(dir, modifiedFile, 'utf-8', (err) => {
        if(err){
            console.error("Unable to write to file", err)
            return
        }
        console.log("Completed the task")
    })
    })
}

let path = 'C:/Users/adhil/OneDrive/Desktop/Java Projects/src/hey.txt'
modifyFile(path)