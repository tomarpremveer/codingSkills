import Product from './Product';
class Store {
    constructor() {
        this.products = [];
    }
    addProducts(...products) {
        this.products.push(...products);
    }
    updateProduct(productId, quantity, action = 'INCREASE') {
        const productToBeUpdated = this.products.find(
            (pro) => pro.id === productId
        );
        productToBeUpdated.updateQuantity(quantity, action);
    }
    notifyAboutProduct(productId, subscriber) {
        const productToBeNotified = this.products.find(
            (pro) => pro.id === productId
        );
        productToBeNotified.subscribe(subscriber);
    }
    removeProducts() {}
}
const p1 = new Product('p1', 1, 'p1');
const p2 = new Product('p2', 2, 'p2');
const p3 = new Product('p3', 3, 'p3');
const p4 = new Product('p4', 4, 'p4');
const p5 = new Product('p5', 5, 'p5');

const store = new Store();
store.addProducts(p1, p2, p3, p4, p5);

export default store;
