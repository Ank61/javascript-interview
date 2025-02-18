function factorial(number) { 

    if (number === 0 || number === 1) { 
  
      return 1; 
  
    } else { 
  
      return number * factorial(number - 1); 
  
    } 
  
  } 
  function fibonacciWithMemoization(n) { 
  
    let memo = [0, 1]; 
  
    for (let i = 2; i <= n; i++) { 
  
      memo[i] = memo[i - 1] + memo[i - 2]; 
  
    } 
  
    return memo; 
  
  } 

  console.log(fibonacciWithMemoization(4))