const getConnection = require('../database/connection');
const BookRepository = require('../repositories/book-repo');

exports.findAllBooks = () => {

    return new Promise((resolve, reject) => {

        console.log('findAllBooks service function called');
        const connection = getConnection();

        const results = BookRepository.findAllBooks(connection);

        connection.end();
        
        resolve(results);
    });   
}

exports.findBookById = (id) => {

    return new Promise(async (resolve, reject) => {

        const connection = getConnection();
        
        const results = await BookRepository.findBookById(connection, id);
        
        connection.end();

        resolve(results);
    }); 
};

exports.registNextBook = (book) => {

    return new Promise(async (resolve, reject) => {

        const connection = getConnection();

        connection.beginTransaction();

        try {

            const result = await BookRepository.registNewBook(connection, book);
            console.log('result : ', result.insertId);

            const insertedBook = await BookRepository.findBookById(connection, result.insertId);
            console.log('insertedBook : ', insertedBook);

            connection.commit();
            console.log('commit successfully');

            resolve(insertedBook);

        } catch(err) {
            connection.rollback();
            console.error('rollback successfully');

            reject(err);
        } finally {
            connection.end();
            console.log('connection is closed successfully');
        }
    });
};