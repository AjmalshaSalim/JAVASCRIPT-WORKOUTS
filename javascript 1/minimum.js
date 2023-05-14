function linearSearch(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  }
  
  const array = [2, 5, 7, 11, 13, 17];
  const minElement = linearSearch(array);
  
  console.log(`The minimum element in the array is ${minElement}.`);
  