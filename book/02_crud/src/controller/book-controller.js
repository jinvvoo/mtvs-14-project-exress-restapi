// 08번
// const HttpStatus = require('http-status');
// const BookService = require('../services/book-service');
// exports.findAllBooks = async () => {

//     const result = await BookService.findAllBooks();

//     console.log(result); 
// };


// 07번 보고 컨트롤러 비슷하게 구현
// response가 없다.

// 이후 서버 키고 postman을 켜보기.


//07번
const HttpStatus = require('http-status');
const BookService = require('../services/book-service');
const BookDTO = require('../dto/book-dto');

exports.findAllbooks = async (req, res, next) => {

    const books = await BookService.findAllBooks();

    res.status(HttpStatus.OK).send({
        status: HttpStatus.OK,
        message: 'OK',
        results: books
    });
}

exports.findBookById = async (req, res, next) => {
    // const Id = req.params.id;
    // const book = await BookService.findBookById(Id);

    const book = await BookService.findBookById(req.params.id);

    if(book && book.length > 0) {
        res.status(HttpStatus.OK).send({
            status: HttpStatus.OK,
            message: 'OK',
            results: book
        });
    }

    if(book && book.length === 0) {
        res.status(HttpStatus.NOT_FOUND).send({
            status: HttpStatus.NOT_FOUND,       //404
            message: 'NOT_FOUND',
            code: -999999,
            results: [],
            links:[
                {
                    rel: 'bookRegist',
                    method: 'POST',
                    href: 'https://api.root.com/api/v1/books'                
                }
            ]
        });
    }
}


exports.registBook = (req, res, next) => {
    
    const result = BookService.registBook(new BookDTO(req.body));
    
    if(result) {
        res.status(HttpStatus.CREATED).send({
            status: HttpStatus.CREATED, //201
            message: 'CREATED',
            results : {
                id: result.id,
                Name: result.Name
            },
            contentLocation: `/books/${result.id}`
        });
    } else {
        // 실패 시 응답 내용
        res.status(HttpStatus.BAD_REQUEST).send({
            status: HttpStatus.BAD_REQUEST,
            message: 'BAD REQUEST',
            code: -888888,
            results: [],
            links: [
                {
                    rel:'bookRegist',
                    method: 'POST',
                    href: 'https://api.root.com/api/v1/books'
                }
            ]
        });
    }
};