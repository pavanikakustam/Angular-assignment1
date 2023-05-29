//example1
const originalArray = [1, 2, 3];
const clonedArrayWithExtraElement = [...originalArray, 4];

console.log(clonedArrayWithExtraElement);

//example2
function printNames(...names) {
    names.forEach((name) => {
      console.log(name);
    });
  }
  
  printNames('pavani', 'sample', 'mythreya', 'Sarah');