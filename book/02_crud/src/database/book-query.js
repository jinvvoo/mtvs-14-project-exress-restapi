exports.findAllBooks = () => {

    return `
        SELECT * 
            FROM TBL_book
    `;
};

exports.findBookById = () => {
    return `
        SELECT * 
            FROM TBL_book
            WHERE id = ?
    `;
};

exports.registNewBook = () => {

    return `
        INSERT 
          INTO TBL_book
          (title, author)
          VALUES
          (?,?)
    `;
};