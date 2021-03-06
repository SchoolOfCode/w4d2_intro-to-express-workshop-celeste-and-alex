//IN TERMINAL
// initialise npm in terminal - gives us package.json - (npm init -y)
// install express (npm i express)

// IN package.json 
// add type: module - allows ESM
//IN index.js file
// import express from npm
import express from 'express';

//run the express function, store result
const app = express();
// set the port you want to start listening
const PORT = 3000;

//make get request using 2 parameters - base path & callback function. Function has 2 args (req = request, res = response)
app.get('/', function (req, res) {
    // Our server is sending the response ('Hello World')
    res.json({message: 'Hello World!'})
  });

  // set which port we want to listen for the response, and function 
  app.listen(PORT, function () {
    console.log(`Example app listening at http://localhost:${PORT}`)
  })

