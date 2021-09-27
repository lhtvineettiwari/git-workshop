const http = require('http');

const server = http.createServer((req,res)=>{

   if(req.url === '/'){
       res.end('Welcome, master kindly put your command to perform the task')
   }
   if(req.url ==='/about'){
       res.end('Here is a short notes about the command you want to get informed')
   }
})

server.listen(3000)