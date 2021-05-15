import express from 'express';

const app = express();
const port = 8080;

app.get('/api/ping', (req, res) => {
  res.json({ data: 'pong from mono-api 👋🏓' });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`);
});
