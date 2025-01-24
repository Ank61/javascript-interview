//Exmaple 1  : All : If one fails then all fails
const fetchUser = () => new Promise(resolve => setTimeout(() => resolve({ id: 1, name: 'Alice' }), 1000));
const fetchPosts = () => new Promise(resolve => setTimeout(() => resolve(['Post 1', 'Post 2']), 1500));
const fetchComments = () => new Promise((resolve,reject) => setTimeout(() => reject(['Comment 1', 'Comment 2']), 1200));

// Promise.all([fetchUser(), fetchPosts(), fetchComments()])
//   .then(results => {
//     const [user, posts, comments] = results;
//     console.log('User:', user);
//     console.log('Posts:', posts);
//     console.log('Comments:', comments);
//   })
//   .catch(error => {
//     console.error('Error:', error.message);
//   });

//Example 2 : Race() first success or failed promises returns 
// const fetchFromAPI1 = () => new Promise(resolve => setTimeout(() => resolve('API1 result'), 2000));
// const fetchFromAPI2 = () => new Promise((resolve, reject) => setTimeout(() => reject('API2 result'), 1000));

// Promise.race([fetchFromAPI1(), fetchFromAPI2()])
//   .then(result => {
//     console.log('First result:', result); // Logs 'API2 result' since it resolves first
//   })
//   .catch(error => {
//     console.error('Error:', error.message);
//   });

//Example 3 : allSettled() : Returns only when all the promises are done even if the reject promises.
// const fetchDataWithErrors = () => {
//     return Promise.allSettled([fetchUser(), fetchPosts(), fetchComments()])
//       .then(results => {
//         results.forEach(result => {
//           if (result.status === 'fulfilled') {
//             console.log('Success:', result.value);
//           } else {
//             console.log('Error:', result.reason);
//           }
//         });
//       });
//   };
//   fetchDataWithErrors();

//Example 4 : .any()  :if any promise resolves and rejects when all the promise rejects.
// const promise1 = new Promise((_, reject) => setTimeout(reject, 100, 'Error 1'));
// const promise2 = new Promise((resolve) => setTimeout(resolve, 200, 'Result 2'));
// const promise3 = new Promise((resolve) => setTimeout(resolve, 300, 'Result 3'));
// Promise.any([promise1, promise2, promise3])
//   .then((result) => {
//     console.log(result); // Output: Result 2
//   })
//   .catch((errors) => {
//     console.error(errors);
//   }); 

//Example 5 : The Promise.reject() static method returns a Promise object that is rejected with a given reason
// function resolved(result) {
//     console.log('Resolved');
//   }
  
//   function rejected(result) {
//     console.error(result);
//   }
  
//   Promise.reject(new Error('fail')).then(resolved, rejected);
//   // Expected output: Error: fail
  
