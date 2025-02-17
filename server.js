const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Endpoint to receive data from HTTP client
app.post('/receive-data', (req, res) => {
  const data = req.body;
  console.log('Received data:', data);
  // Process the received data here
  res.status(200).send('Data received successfully');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
