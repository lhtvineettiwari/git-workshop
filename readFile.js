const {readFile} = require('fs')
const util = require('util')
const readFiletxt = util.promisify(readFile)


const start = async()=>{

    try {
        const first = await readFiletxt('./first.txt', 'utf-8')
    console.log(first);
    } catch (error) {
      console.log(error);
    }
    
}
start();