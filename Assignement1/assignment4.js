const arrMax = (numbers) => {
    let maxNumber = -Infinity;
  
    numbers.forEach((number) => {
      if (number > maxNumber) {
        maxNumber = number;
      }
    });
  
    return maxNumber;
  };
  
  const numbers = [5, 10, 22, 8, 3];
  console.log(arrMax(numbers));