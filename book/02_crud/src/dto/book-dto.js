class BookDTO {
    id;
    name;
    author;

    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.author = data.author;
    }

}

module.exports = BookDTO;