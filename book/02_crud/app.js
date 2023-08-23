// 08번
// const BookController = require('./src/controller/book-controller');

// BookController.findAllBooks();


const express = require('express');
const morgen = require('morgan');

const app = express();

app.use(morgen('dev'));
app.use(express.json());

const bookRouter = require('./src/routes/book-route');
app.use('/books', bookRouter);

app.listen(8888, () => console.log('Listening on port 8888!'));
