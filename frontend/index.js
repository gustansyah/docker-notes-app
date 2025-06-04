const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname)));
app.listen(3000, () => {
  console.log('Frontend running on port 3000');
});