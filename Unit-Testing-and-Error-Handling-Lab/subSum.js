function subSum(arr, startIdx, endIdx) {
  if (Array.isArray(arr) == false) {
    return NaN;
  }
  if (startIdx < 0) {
    startIdx = 0;
  }
  if (endIdx > arr.length - 1) {
    endIdx = arr.length - 1;
  }
  let result = arr.slice(startIdx, endIdx + 1).reduce((sum, num) => {
    sum = sum + Number(num);
    return sum;
  }, 0);
  return result;
}


console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));
console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(subSum([10, "twenty", 30, 40], 0, 2));
console.log(subSum([], 1, 2));
console.log(subSum("text", 0, 2));
