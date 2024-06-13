const obj = {
  name: 'sai',
  age: 27
}

obj.property = obj;
obj.property2 = obj;

const RemoveCyclicRef = (obj) => {
  //weakset which keeps track of objects
  const visited = new WeakSet();
  
  const traverseData = (data) => {
    // create a new object that needs to be returned
    let result = {}
    //if object is already there in WeakSet then return 
    if(visited.has(data)){
      return;
    }
    
    //if the type of key is object then
    if(typeof data === 'object'){
      //add to the set
      visited.add(data);
      
      //loop the object
      for(key in data){
        
        //get the return value of the traversedData
        const stagedResult = traverseData(data[key]);
        
        //if it is not undefined or null then 
        if(stagedResult){
          
        //create a new key and and add the value  
        result[key] = stagedResult;
        }
      }
    } else {
      
      //directly add the primitive value
      result = data;
    }
  
      return result;
  }
  
return traverseData(obj);
  
  
}


const result = RemoveCyclicRef(obj);
console.log(result);
