const express = require('express');
const morgan = require('morgan');
const postBank = require('./server/postBank');
const postList = require('./views/postList');
const postDetails = require('./views/postDetails');
const errorPage = require('./views/errorPage');

const app = express();

const { PORT = 1337 } = process.env;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});

app.use(morgan('dev'));
app.use(express.static('public'));

// ROUTES
app.get('/', (req, res) => {
  const posts = postBank.list();

  res.send(postList(posts));
});

app.get('/posts/:id', (req, res) => {
  const post = postBank.find(req.params.id);

  if (!post.id) {
    throw new Error('Not Found');
  } else {
    res.send(postDetails(post));
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(404).send(errorPage());
});