
function solve(s) { // Renamed 'input' to 's' as per problem description
  // 1. Count character frequencies
  const charFrequencies = {}; // Use 'const' for variables that won't be reassigned
  
  // Iterate over the string correctly
  for (const char of s) {
    charFrequencies[char] = (charFrequencies[char] || 0) + 1;
  }

  // 2. Identify characters with odd frequencies
  const oddFrequencyChars = [];
  
  // Iterate through the collected frequencies
  for (const char in charFrequencies) {
    // Ensure the property belongs to the object itself, not its prototype chain
    if (Object.hasOwnProperty.call(charFrequencies, char)) { 
      if (charFrequencies[char] % 2 !== 0) { // Check if frequency is odd
        oddFrequencyChars.push(char);
      }
    }
  }

  // 3. Sort them alphabetically and construct the result string
  // If no characters appear an odd number of times, oddFrequencyChars will be empty,
  // and join('') will correctly return an empty string.
  oddFrequencyChars.sort(); // Sorts alphabetically by default for strings

  return oddFrequencyChars.join('');
}

// Test cases
console.log(`"banana" -> "${solve("banana")}"`); // Expected: "bnn" (or "b" if unique chars, but problem implies repeated. Ah, "unique characters that appear an odd number of times". "b":1, "a":3, "n":2. So "ba")
// Re-reading problem: "unique characters that appear an odd number of times".
// "banana": b:1 (odd), a:3 (odd), n:2 (even)
// Unique chars with odd freq: 'b', 'a'. Sorted: 'a', 'b'. Result: "ab"