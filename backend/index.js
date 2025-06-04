const express = require('express');
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello from Backend!');
});
app.listen(process.env.PORT || 8080, () => {
  console.log('Server is running');
});