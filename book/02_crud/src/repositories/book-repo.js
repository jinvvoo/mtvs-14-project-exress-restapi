const bookQuery = require('../database/book-query');

// 이 함수 실행하면 Promise 객체 반환. 
exports.findAllBooks = (connection) => {

    return new Promise((resolve, reject) => {       // resolve 결과값 저장.
        connection.query(bookQuery.findAllBooks(), (err, result) => {
            if(err){
                reject(err);
            }
            resolve(result);
        });
    });
};

exports.findBookById = (connection, id) => {

    return new Promise((resolve, reject) => {

        connection.query(bookQuery.findBookById(), [id], (err, result) => {

            if(err){
                reject(err);
            }

            resolve(result);
        });
    });
};

exports.registNewBook = (connection, newBook) => {

    return new Promise((resolve, reject) => {

        connection.query(
            bookQuery.registNewBook(),
            [
                newBook.title,
                newBook.author
            ],
            (err, result) => {
                if(err){
                    reject(err);
                }
                console.log('repo result : ', result);

                resolve(result);
            });
        });
};