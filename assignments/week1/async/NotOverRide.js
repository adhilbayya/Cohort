let fs = require('fs')

function writeInto(dir, content){
    fs.appendFile(dir, content, 'utf8', (err, data) => {
        if(err){
            console.error("Unable to write to files :", err)
            return 
        } 
    })
    console.log("Successfully writed into the files")
}

let content = `\n"Im not overriding into the files"
adding extra content to the file without ovveridding`
let path = 'C:/Users/adhil/OneDrive/Desktop/Java Projects/src/hey.txt'

writeInto(path, content)