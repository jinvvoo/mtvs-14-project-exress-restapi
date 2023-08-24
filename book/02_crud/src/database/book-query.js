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

exports.registBook = () => {

    return `
        INSERT 
          INTO TBL_book
          (name, author)
          VALUES
          (?,?)
    `;
};