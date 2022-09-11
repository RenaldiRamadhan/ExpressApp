const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
app.set('view engine', 'ejs');
// Home Route
app.get('/', (req, res) => {
  res.render('base', { title: 'Login System' });
});

app.listen(port, () => {
  console.log('Lostening to the server on http://localhost:3000');
});
