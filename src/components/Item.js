class Item {

    static lastId = 0; // static identifica que é uma variável de class.

    constructor(text) {
        this.id = Item.lastId++;
        this.text = text;
        this.done = false;
    }
}

export default Item;