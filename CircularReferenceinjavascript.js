const obj = {
  name: 'sai',
  age: 27
}

obj.property = obj;
obj.property2 = obj;

const RemoveCyclicRef = (obj) => {
  const visited = new WeakSet();
  
  const traverseData = (data) => {
    let result = {}
    
    if(visited.has(data)){
      return;
    }
    
    if(typeof data === 'object'){
      visited.add(data);
      
      for(key in data){
        const stagedResult = traverseData(data[key]);
        
        if(stagedResult){
          
        result[key] = stagedResult;
        }
      }
    } else {
      result = data;
    }
  
      return result;
  }
  
return traverseData(obj);
  
  
}


const result = RemoveCyclicRef(obj);
console.log(result);
