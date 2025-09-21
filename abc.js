function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) { // Changed '<=' to '<' to prevent out-of-bounds access
    total += arr[i];
  }
  return total; // Corrected 'totl' to 'total'
}