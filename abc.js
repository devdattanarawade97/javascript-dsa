function sum(arr) {
  let total = 0;
  // Corrected loop condition: iterate up to arr.length - 1
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  // Corrected return variable name
  return total;
}
