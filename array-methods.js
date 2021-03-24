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

module.exports = {
  mapper, 
  filterer, 
}; 

