const {mapper, filterer, indexer, reducer, everyer} = require('./array-methods.js');

const emotionalArray = [
  'Happy',
  'Sad',
  'Depressed',
  'Overwhelmed',
  'Joyous', 
];

const numberArray = [
  33,
  66,
  1,
]

describe('array functions', () => {
  describe('array.map but harder function', () => {
    it('takes in an array and then applies the callback and returns each item after the callback has acted on it', () => {
      const mappedItems = mapper(emotionalArray, item => {
        return item + 'ness';
      });

      expect(mappedItems).toEqual([
        'Happyness',
        'Sadness',
        'Depressedness',
        'Overwhelmedness',
        'Joyousness', 
      ]);
    });
  });

  //do holes part after everything else

  describe('array.filter but harder function', () => {
    it('takes in an array and returns all items whose callback returns true', () => {
      const filteredItems = filterer(emotionalArray, item => {
      return (item.charAt(0) === 'J') 
      });

      expect(filteredItems).toEqual(['Joyous'
      ]);
    });
  });

  describe('array.findIndex but harder function', () => {
    it('takes in an array and returns the index of the first item whose callback returns true', () => {});

    const indexedItem = indexer(emotionalArray, item => {
      if(item.charAt(0) === 'J') 
        return(item.charAt(0)); 
    });

    expect(indexedItem).toEqual([4])

  });

  describe('array.findIndex but harder function, -1 test', () => {
    it('takes in an array and returns the index of the first item whose callback returns true', () => {});

    const indexedItem = indexer(emotionalArray, item => {
      if(item.charAt(0) === 'Z') 
        return(item.charAt(0)); 
    });

    expect(indexedItem).toEqual(-1)

  });

  describe('array.reduce but harder function', () => {
    it('continuously adds the values in an array and returns the final accumulator value', () => {});
    const callback = (accumulator, item) => (accumulator + item); 
  
    expect(reducer(numberArray, callback)).toEqual(100)
  });


  describe('array.Every but harder function', () => {
      it('takes in an array and returns true if all items are true/truthy, otherwise returns false', () => {});
  
      const isEvery = everyer(emotionalArray, item => {
        if(!item.length > 2) 
          return(item); 
      });
   
    expect(isEvery).toEqual(true)

  });

  describe('array.Every but harder function, other result', () => {
    it('takes in an array and returns false if any items are false/falsey', () => {});

    const isEvery = everyer(emotionalArray, item => {
      if(item.length > 2) 
        return(item); 
    });
 
  expect(isEvery).toEqual(false)

});
});


