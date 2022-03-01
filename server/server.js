const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();

const apiRouter = require('./routes/api');
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true}));

app.use(express.static(path.resolve(__dirname, '../index.html')));
app.use(express.static(__dirname + 'index.html'));

app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;