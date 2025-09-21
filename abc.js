function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) { // Changed '<=' to '<'
    total += arr[i];
  }
  return total; // Changed 'totl' to 'total'
}