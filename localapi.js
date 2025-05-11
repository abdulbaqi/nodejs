// test-api.js

const BASE_URL = 'http://localhost:3000/api/products';

const testGet = async () => {
  try {
    const res = await fetch(BASE_URL);
    const contentType = res.headers.get("content-type");
    const data = contentType.includes("application/json") ? 
        await res.json() : await res.text();
    console.log('✅ GET:', data);
  } catch (err) {
    console.error('❌ GET Error:', err.message);
  }
};


const testPost = async () => {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'Anas', quantity: 200, price:311.99 })
    });
    const data = await res.json();
    console.log('✅ POST:', data);
  } catch (err) {
    console.error('❌ POST Error:', err.message);
  }
};


const testPut = async () => {
  try {
    const id = "682083df3b45be079f547ae0"; // Replace with actual resource ID
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'anas abdul-baqi', price: 400.9 })
    });
    const data = await res.json();
    console.log('✅ PUT:', data);
  } catch (err) {
    console.error('❌ PUT Error:', err.message);
  }
};


const testDelete = async () => {
  try {
    const id = "682051121eafd7808c908722"; // Replace with actual resource ID
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE'
    });
    const data = await res.json();
    console.log('✅ DELETE:', data);
  } catch (err) {
    console.error('❌ DELETE Error:', err.message);
  }
};

(async () => {
  await testGet();
  // await testPost();
  // await testPut();
  await testDelete();
})();
