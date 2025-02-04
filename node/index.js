const express = require('express');
const app = express();


const middleware = (request, response , next)=>{
    console.log('middleware called');
    next();
    };

const authenticate = (request, response, next)=>{
// if(!request.header['autehentication']){
// return response.send('Could not authenticate');
// }
    next();
}

const commonError = (err, req, res, next)=>{
    console.error(err);
    res.status(500).send('Something went wrong asdfs!');
}

app.get('/error', (req, res) => {
    throw new Error('Something went wrong');
  });
  
  // Global error handler
  app.use(commonError);
 

app.get("/",middleware,authenticate,(request,response)=>{
response.send('Hello World');
})


app.listen(3000,()=>{
    console.log('Server running on port', 3000)
})  