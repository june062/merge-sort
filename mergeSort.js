function mergeSort(array, sortedArray = []) {
  if (array.length === 1) {
    return array;
  } else {
    let left = array.slice(0, array.length / 2);
    let right = array.slice(array.length / 2);

    left = mergeSort(left);
    right = mergeSort(right);

    let leftIndex = 0;
    let rightIndex = 0;

    while (left.length > 0 && right.length > 0) {
      if (left[leftIndex] >= right[rightIndex]) {
        sortedArray.push(right[rightIndex]);
        right.splice(rightIndex, 1);
      } else {
        sortedArray.push(left[leftIndex]);
        left.splice(leftIndex, 1);
      }
    }
    if (left.length == 0) {
      while (right.length > 0) {
        sortedArray.push(right[rightIndex]);
        right.splice(rightIndex, 1);
      }
    } else {
      while (left.length > 0) {
        sortedArray.push(left[leftIndex]);
        left.splice(leftIndex, 1);
      }
    }

    return sortedArray;
  }
}

console.log(mergeSort([6, 5, 7, 2, 9, 1, 4, 11]));
