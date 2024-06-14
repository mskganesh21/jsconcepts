const throttle = (cb,delay) => {
  let shouldWait = false;
  
  let waitingArgs;
  
  const timeoutfunc = () => {
      if(waitingArgs === null){
      shouldWait = false;
      } else {
        cb(...waitingArgs);
        waitingArgs = null;
        setTimeout(timeoutfunc, delay);
      }
    }
  
  return (...args) => {
    
    if(shouldWait){
      waitingArgs = args;
      return;
    }
    
    cb(...args);
    
    shouldWait = true;
    setTimeout(timeoutfunc, delay)
  }
}
