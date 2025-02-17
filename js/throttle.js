// At most once per specified interval
// Exectues immediatly

function throttle(func, interval) {
    let throttled = false;
  
    return function(...args) {
      if (!throttled) {
        throttled = true;
        func.apply(this, args);
        setTimeout(() => {
          throttled = false;
        }, interval);
      }
    };
  }
  
  // Example usage:
  function handleScroll() {
    console.log('Scrolled!');
  }
  
  const throttledScrollHandler = throttle(handleScroll, 200);
  
  window.addEventListener('scroll', throttledScrollHandler);