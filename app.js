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
  res.json({setup: 'Why did the bicycle fall over?'});
});

app.get('/joke2', (req, res) => {
  res.json({setup: 'What do you call fake spaghetti?'});
});

// Punchline Endpoints
app.get('/punchline1', (req, res) => {
  res.json({ setup: 'Why did the bicycle fall over?', punchline: 'Because it was two-tired!' });
});
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/punchline2', (req, res) => {
  res.json({ setup: 'What do you call fake spaghetti?', punchline: 'An impasta!!' });
});

module.exports = app;
