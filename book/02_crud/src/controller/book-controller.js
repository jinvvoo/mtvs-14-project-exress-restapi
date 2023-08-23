const HttpStatus = require('http-status');
const BookService = require('../services/book-service');

// 08번
// exports.findAllBooks = async () => {

//     const result = await BookService.findAllBooks();

//     console.log(result); 
// };


//07번

exports.findAllbooks = (req, res, next) => {

    const books = BookService.findAllBooks();

    res.status(HttpStatus.OK).send({
        status: HttpStatus.OK,
        message: 'OK',
        results: books
    });
}




// 07번 보고 컨트롤러 비슷하게 구현
// response가 없다.

// 이후 서버 키고 postman을 켜보기.