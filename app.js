// const express = require('express');
// const fetch = require('node-fetch');
// const app = express();
// const port = 3000;

// const cities = ["Orlando", "Winter Park", "Oviedo", "Maitland"];
// const populations = [309154, 29131, 39559, 18959];

// // Jokes and Punchlines
// const jokes = [
//   { setup: "Why did the bicycle fall over?", punchline: "Because it was two-tired!" },
//   { setup: "What do you call fake spaghetti?", punchline: "An impasta!" },
//   { setup: "How does a penguin build its house?", punchline: "Igloos it together!" },
//   { setup: "What did the ocean say to the shore?", punchline: "Nothing, it just waved!" },
//   { setup: "Why don't scientists trust atoms?", punchline: "Because they make up everything!" },
//   { setup: "How do you organize a space party?", punchline: "You planet!" },
//   // Add more jokes as needed
// ];

// // Endpoint to get a random joke and punchline
// app.get('/joke', (req, res) => {
//   const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
//   return res.json(randomJoke);
// });

// // Endpoints for specific jokes and punchlines
// app.get('/joke1', (req, res) => {
//   res.send('Why did the scarecrow win an award?');
// });

// app.get('/joke2', (req, res) => {
//   res.send('How does a penguin build its house?');
// });

// // Punchline endpoints
// app.get('/punchline1', (req, res) => {
//   res.send('Because he was outstanding in his field!');
// });

// app.get('/punchline2', (req, res) => {
//   res.send('Igloos it together!');
// });

// // Rest of your existing endpoints
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.get('/cities', (req, res) => {
//   return res.json(cities);
// });

// app.get('/populations', (req, res) => {
//   return res.json(populations);
// });

// module.exports = app;

// app.js
const express = require('express');
const app = express();

const jokesPool = [
  { setup: "Why did the bicycle fall over?", punchline: "Because it was two-tired!" },
  { setup: "What do you call fake spaghetti?", punchline: "An impasta!" },
  { setup: "How does a penguin build its house?", punchline: "Igloos it together!" },
  { setup: "What did the ocean say to the shore?", punchline: "Nothing, it just waved!" },
  { setup: "Why don't scientists trust atoms?", punchline: "Because they make up everything!" },
  { setup: "How do you organize a space party?", punchline: "You planet!" },
];

// Joke Endpoint
app.get('/joke', (req, res) => {
  const randomIndex = Math.floor(Math.random() * jokesPool.length);
  const randomJoke = jokesPool[randomIndex];
  res.json(randomJoke);
});

// Joke Endpoints
app.get('/joke1', (req, res) => {
  res.json({ setup: 'Why did the bicycle fall over?', punchline: 'Because it was two-tired!' });
});

app.get('/joke2', (req, res) => {
  res.json({ setup: 'What do you call fake spaghetti?', punchline: 'An impasta!!' });
});

// Punchline Endpoints
app.get('/punchline1', (req, res) => {
  res.json({ setup: 'Why did the bicycle fall over?', punchline: 'Because it was two-tired!' });
});

app.get('/punchline2', (req, res) => {
  res.json({ setup: 'What do you call fake spaghetti?', punchline: 'An impasta!!' });
});

module.exports = app;