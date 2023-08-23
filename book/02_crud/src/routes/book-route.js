const express = require('express');
const router = express.Router();
const BookController = require('../controller/book-controller');

router.get('/', BookController.findAllbooks);
router.post('/', 
// router.put('/');
// router.delete('/');

module.exports = router;