// fixed.js - now with fewer common JS mistakes

const usersDB = [
  { id: 1, name: 'Alice', emails: ['alice@example.com'] },
  { id: 2, name: 'Bob' }
];

function getUserEmails(userId) {
  // BUG 1 & 2 fixed: Use find() for correct comparison and early exit
  const user = usersDB.find(u => u.id === userId);

  // BUG 3 fixed: Check if user exists before accessing properties
  return user ? user.emails || [] : [];
}

async function fetchData(url) {
  // BUG 4 fixed: Await the fetch call
  const res = await fetch(url);
  // Check if response is OK
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  // BUG 5 fixed: data is already an object after res.json()
  const data = await res.json();
  return data;
}

function delayedGreet(name) {
  // BUG 6 Fixed: Changed 'const' to 'let' to allow reassignment, fixing TypeError.
  // Note on closure: The setTimeout callback captures the value of 'currentGreeting'
  // at the time it's defined ('Hello ' + name).
  // The subsequent reassignment to 'Hi ' + name happens immediately and does NOT
  // affect the value captured by the setTimeout callback.
  // So, this function will still log 'Hello Charlie' after 1 second.
  // If the intent was to log 'Hi Charlie', the reassignment would need to occur
  // BEFORE the setTimeout, or a different logic (e.g., another setTimeout) is needed.
  let currentGreeting = 'Hello ' + name;
  setTimeout(function() {
    console.log(currentGreeting);
  }, 1000);
  currentGreeting = 'Hi ' + name; // This line executes but does not change the greeting logged by setTimeout.
}

// usage
console.log(getUserEmails(1)); // Alice's email
console.log(getUserEmails(2)); // Bob's emails (empty array as Bob has no emails property, fixed to return [])
console.log(getUserEmails(3)); // Empty array for non-existent user

// Mock fetch for demonstration if no actual API exists
// This mock helps in running the fetchData example without a real server.
globalThis.fetch = async (url) => {
    if (url === '/api/users/1') {
        return {
            ok: true,
            status: 200,
            json: async () => ({ id: 1, name: 'Alice', email: 'alice@api.com' })
        };
    }
    return {
        ok: false,
        status: 404,
        json: async () => ({ error: 'Not Found' })
    };
};

fetchData('/api/users/1').then(d => console.log('Fetch Data Success:', d)).catch(e => console.error('Fetch Error:', e.message));
fetchData('/api/nonexistent').then(d => console.log('Fetch Data Success (should fail):', d)).catch(e => console.error('Fetch Error (expected):', e.message));

delayedGreet('Charlie'); // Will log 'Hello Charlie' after 1 second.
// The `currentGreeting = 'Hi ' + name;` line will execute, but its effect
// isn't seen by the previous `setTimeout` due to closure behavior.