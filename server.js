const http = require('http');

http.createServer((req, res) => {
      res.end("Ezeoke Chidera Johnclinton");
}).listen(8900, () => {
      console.log('Server is runing on port 8900')
});