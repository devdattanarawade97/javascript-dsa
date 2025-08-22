function solve(s) { // Renamed 'input' to 's' for clarity, commonly used for 'string'
  const stack = [];
  const bracketMap = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // If it's an opening bracket, push it onto the stack
    if (bracketMap.hasOwnProperty(char)) {
      stack.push(char);
    }
    // If it's a closing bracket
    else if (Object.values(bracketMap).includes(char)) {
      // If stack is empty, there's no corresponding open bracket
      if (stack.length === 0) {
        return false;
      }

      const lastOpenBracket = stack.pop();
      // Check if the popped open bracket matches the current closing bracket
      if (bracketMap[lastOpenBracket] !== char) {
        return false;
      }
    }
    // Optional: Handle non-bracket characters if the problem implies they could exist.
    // For this problem, it states "just the characters", so we might not need this.
    // else {
    //   // Handle invalid characters if necessary, or ignore if problem specifies only brackets
    // }
  }

  // After iterating, if the stack is empty, all brackets were matched
  return stack.length === 0
}