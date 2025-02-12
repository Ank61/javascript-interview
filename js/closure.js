//Exmaple 1 : Basic Exmaple
// function outerFuntion (){
//     const check = "Hello"
//     return ()=>{
//         console.log("Inner function called", check);
//     }
// }

// const check1 = outerFuntion();
// check1()

//Example 2 : Memoization through closure
function Outer(){
    let cache = {};
    return (userId, sessionId)=>{
        if(cache[userId]===undefined){
            cache[userId] = sessionId;
            return sessionId
        }
        else{
            return cache[userId]
        }
    }
}
const check1 = Outer();
const id = check1(234,219346824);
console.log(id)
