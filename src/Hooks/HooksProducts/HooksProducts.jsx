import React, { useState } from 'react';
import './HooksProducts.css';
import Selector from '../../components/TwoButtons/TwoButtons';

function HooksProduct() {
    const [products, setProducts] = useState([]); 
    const [showForm, setShowForm] = useState(false); 
    const [name, setName] = useState(''); 
    const [description, setDescription] = useState(''); 
    const [image, setImage] = useState(''); 
    const [totalQuantity, setTotalQuantity] = useState(0);


    const addProduct = (e) => {
        e.preventDefault(); 
        const newProduct = {
            id: Date.now(), 
            name,
            description,
            image,
            quantity: 1 
        };
        setProducts([...products, newProduct]); 
        setShowForm(false); 
        setName('');
        setDescription('');
        setImage('');
    };

    
    const handleAddToCart = (product) => {
        setTotalQuantity(prevTotal => prevTotal + product.quantity);
        console.log(`Added ${totalQuantity + product.quantity} items to the cart.`);
    };

    return (
        <div>
        {!showForm ? (
            <center>
            <button className='btn' onClick={() => setShowForm(true)}>Add a Product</button>
            </center>
        ) : null}
            {showForm ? (
                <div className="center-container">
                <form className="form" onSubmit={addProduct}>
                    <h2>Add a New Product</h2>
                    <div className="flex-column">
                        <label>Name:</label>
                        <div className="inputForm">
                            <input 
                                type="text" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                required 
                                placeholder="Enter product name" 
                                className="input" 
                            />
                        </div>
                    </div>
                    <div className="flex-column">
                        <label>Description:</label>
                        <div className="inputForm">
                            <textarea 
                                value={description} 
                                onChange={(e) => setDescription(e.target.value)} 
                                required 
                                placeholder="Enter product description" 
                                className="input" 
                            />
                        </div>
                    </div>
                    <div className="flex-column">
                        <label>Image URL:</label>
                        <div className="inputForm">
                            <input 
                                type="text" 
                                value={image} 
                                onChange={(e) => setImage(e.target.value)} 
                                required 
                                placeholder="Enter image URL" 
                                className="input" 
                            />
                        </div>
                    </div>
                    <button type="submit" className="button-submit">Add Now</button>
                    <button type="button" onClick={() => setShowForm(false)} className="button-submit">Cancel</button>
                </form>
            </div>
            ) : (
                <div className="card-container">
                    {products.map((product) => (
                        <div key={product.id} className="card">
                            <img src={product.image} className="card-img-top" alt={product.name} />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.description}</p>
                                <Selector />
                                <button className="btn" onClick={() => handleAddToCart(product)}>
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default HooksProduct;