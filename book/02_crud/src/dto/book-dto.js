class BookDTO {
    id;
    name;
    title;

    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.title = data.title;
    }

}

module.exports = BookDTO;