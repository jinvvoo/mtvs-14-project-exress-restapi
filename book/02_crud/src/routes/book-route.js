const express = require('express');
const router = express.Router();
const BookController = require('../controller/book-controller');

router.get('/', BookController.findAllbooks);
router.get('/:id', BookController.findBookById);
router.post('/', BookController.registBook);
// router.put('/');
// router.delete('/');

module.exports = router;