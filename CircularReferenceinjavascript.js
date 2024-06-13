console.log("Hello, World!");

const obj = {
  a: 1,
  b: 2
};

obj.c = obj;

const removeCyclicRef = (obj) => {
  const visited = new WeakSet();

  const traverseData = (data) => {
    let result = {}

    if (visited.has(data)) {
      return;
    }

    if (typeof data === 'object') {
      visited.add(data);
      for (let key in data) {
        const stagedResult = traverseData(data[key]);
        if (stagedResult) {
          result[key] = stagedResult;
        }
      }
    } else {
      result = data;
    }

    return result;
  };

  return traverseData(obj); // Return the result of the traversal
};

const newObj = removeCyclicRef(obj); // Save the result in a new object
console.log(newObj);
