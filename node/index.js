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

app.get("/",middleware,authenticate,(request,response)=>{
response.send('Hello World');
})


app.listen(3000,()=>{
    console.log('Server running on port', 3000)
})