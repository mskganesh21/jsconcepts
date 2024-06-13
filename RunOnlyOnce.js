function PrintOnce(){
  console.log(`print only once`);
}

PrintOnce();
PrintOnce();
PrintOnce();


const RunOnce = (fn) => {
  let hasRun = false;
  
  return function(){
    if(!hasRun){
      hasRun=true;
      return fn.apply(this,arguments);
    }
  }
}

const sayHello = RunOnce(() => {
  console.log("Hello World")
})

sayHello();
sayHello();
sayHello();
sayHello();


const Once = (fn,context) => {
  let ran;
  
  return function(){
    if(fn){
      ran = fn.apply(context || this,arguments);
      fn = null;
    }
    
    return ran;
  }
}


const onceDemo = Once(() => {
  console.log(`Hello This is the Once Function`)
});

onceDemo();
onceDemo();
onceDemo();
onceDemo();










