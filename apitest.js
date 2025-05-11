// test-api.js
import fetch from 'node-fetch'; // or use axios

const testGet = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
const res = await fetch('https://improved-umbrella-7r665v4493wwqj-3000.app.github.dev/');
  const data = await res.json();
  console.log('GET result:', data);
};

const testPost = async () => {
  const res = await fetch('https://improved-umbrella-7r665v4493wwqj-3000.app.github.dev/api/products', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({message: 'Hello from POST'})
  });
  const data = await res.json();
  console.log('POST result:', data);
};

testGet();
testPost();
