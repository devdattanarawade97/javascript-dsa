const arr = [1,2,3,4];
for (let i = arr.length - 1; i >= 0; i--) {
  if (arr[i] === 2) arr.splice(i, 1); // modifies array being iterated
  console.log(arr[i]); // skipping or undefined behavior for some indices
}