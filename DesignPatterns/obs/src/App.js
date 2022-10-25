import { useState } from 'react';
import store from './Store';
const logger = (data) => {
    console.log('data in logger is', data);
};
function App() {
    const [state, setState] = useState(0);
    const handleDecreaseQuantityClick = (event) => {
        const { dataset } = event.currentTarget;
        const { id } = dataset;
        setState(state + 1);
        store.updateProduct(id, 1, 'DECREASE');
        console.log('store now is', store);
    };
    const handleNotifyClick = (event) => {
        const { dataset } = event.currentTarget;
        const { id } = dataset;
        setState(state + 1);
        store.notifyAboutProduct(id, logger);
        console.log('store now is', store);
    };
    const handleQuantityUpdate = (event) => {
        const { dataset } = event.currentTarget;
        const { id } = dataset;
        setState(state + 1);
        store.updateProduct(id, 1, 'INCREASE');
        console.log('store now is', store);
    };
    return (
        <div className="App">
            {store.products.map((product) => (
                <div
                    key={product.id}
                    style={{
                        margin: '5px 0',
                    }}
                >
                    <div>Product Name: {product.name}</div>
                    <div>Product quantity: {product.quantity}</div>
                    {product.quantity > 0 ? (
                        <button
                            data-id={product.id}
                            onClick={handleDecreaseQuantityClick}
                        >
                            Decrease Quantity
                        </button>
                    ) : (
                        <>
                            <button
                                data-id={product.id}
                                onClick={handleNotifyClick}
                            >
                                Notify Me
                            </button>

                            <button
                                data-id={product.id}
                                onClick={handleQuantityUpdate}
                            >
                                Update Quantity
                            </button>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}

export default App;
