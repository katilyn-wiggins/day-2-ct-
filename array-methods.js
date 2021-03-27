const mapper = (array, callback) => { 
  let newArray = [];
  for (let index = 0; index < array.length; index++) {
     newArray = [...newArray, callback(array[index])];
     
  }
  return newArray;
};

const filterer = (array, callback) => { 
  let newArray = [];
  for (let index = 0; index < array.length; index++) {
    if(callback(array[index])) {
     newArray = [...newArray, array[index]];
    }  
  }
  return newArray;
};

const indexer = (array, callback) => { 
  let newArray = [];
  for (let index = 0; index < array.length; index++) {
    if(callback(array[index])) {
     return newArray = [...newArray, index];
    }  
    
  }
 return -1 
};

const reducer = (array, callback) => { 
  let accumulator = array[0];  
  for (let index = 1; index < array.length; index++) {
    
  accumulator = callback(accumulator, array[index]);
  }
  return(accumulator);
};

module.exports = {
  mapper, 
  filterer, 
  indexer, 
  reducer, 
}; 

