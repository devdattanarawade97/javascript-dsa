const usersDB = [
  { id: 1, name: 'Alice', emails: ['alice@example.com'] },
  { id: 2, name: 'Bob' }
];

function getUserEmails(userId) {
  // Use find() for a cleaner and more correct implementation.
  // It stops when the user is found and returns undefined if not found.
  const user = usersDB.find(u => u.id === userId);
  // Optional chaining (?.) prevents a TypeError if the user or emails property is missing.
  // Nullish coalescing (|| []) provides a default empty array.
  return user?.emails || [];
}

async function fetchData(url) {
  // Added await to wait for the fetch Promise to resolve.
  const res = await fetch(url);
  // res.json() already parses the JSON. No need for JSON.parse().
  const data = await res.json();
  return data;
}

function delayedGreet(name) {
  // Changed const to let to allow reassignment.
  let greeting = 'Hello ' + name;
  setTimeout(function() {
    console.log(greeting); // uses captured `greeting` from the closure.
                           // This will log the *final* value of `greeting` if it's reassigned before the timeout fires.
  }, 1000);
  greeting = 'Hi ' + name; // Reassign `greeting`
}

// usage
console.log(getUserEmails(1)); // Should output ['alice@example.com']
console.log(getUserEmails(2)); // Should output [] (Bob has no emails property, so user?.emails is undefined, || [] provides default)
console.log(getUserEmails(3)); // Should output [] (user is undefined, user?.emails is undefined, || [] provides default)

// Example usage of fetchData (assuming a /api/users/1 endpoint exists and returns JSON)
// For demonstration, let's mock fetch if not running in a browser or Node with fetch polyfill
if (typeof window === 'undefined' && typeof globalThis.fetch === 'undefined') {
  globalThis.fetch = async (url) => {
    console.log(`Mocking fetch for URL: ${url}`);
    if (url === '/api/users/1') {
      return {
        json: async () => ({ id: 1, name: 'Mock User' }),
        ok: true,
        status: 200
      };
    }
    return { json: async () => ({}), ok: false, status: 404 };
  };
}

fetchData('/api/users/1')
  .then(d => console.log('Fetch Data Success:', d))
  .catch(e => console.error('Fetch Data Error:', e));

delayedGreet('Charlie'); // Will log 'Hi Charlie' after 1 second due to closure capturing final `greeting` value
delayedGreet('David');   // Will log 'Hi David' after 1 second