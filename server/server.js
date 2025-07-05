const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Portfolio server is running!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
}); 