import Observable from './Observable';
class Product extends Observable {
    constructor(name, quantity, id) {
        super();
        this.name = name;
        this.id = id;
        this.quantity = quantity;
    }

    updateQuantity(quantity, action) {
        if (action === 'INCREASE') {
            /* check if quantity is zero, if yes notify all of the subscribers 
            after updating the quantity.
            */
            const isZeroQuantity = this.quantity === 0;
            this.quantity += quantity;
            if (isZeroQuantity) {
                this.observers.forEach((obv) =>
                    obv(`Product ${this.id} is available`)
                );
            }
        } else {
            this.quantity -= quantity;
        }
    }
}

export default Product;
