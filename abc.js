async function fetchJson(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) { // `res.ok` is a more robust way to check for successful HTTP status (200-299)
      console.error(`HTTP error! status: ${res.status}`);
      return {};
    }
    return await res.json();
  } catch (error) {
    console.error("Failed to fetch JSON:", error);
    return {};
  }
}
