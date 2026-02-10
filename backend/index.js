const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: 'https://didactic-guide-x59g655wg6gw36wjx-4200.app.github.dev',
  credentials: true
}));


app.use(express.json());

app.post('/api/register', (req, res) => {
  console.log(req.body);
  res.status(200).json({
    message: 'Form data received successfully',
    data: req.body
  });
});

app.listen(3000, () => {
  console.log('Node server running on port 3000');
});
