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
