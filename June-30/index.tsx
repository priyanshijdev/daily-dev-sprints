 // practice of debounce:

function debouncetoo(func, delay) {
  let timer;
  return function(...args){
    clearTimeout(timer);
    timer= setTimeout(()=> {
      func.apply(this, args)
    }, delay)
  }
}
