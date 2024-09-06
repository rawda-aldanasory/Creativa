import React from 'react';
import HooksProduct from './HooksProducts'; 

const HooksProductsList = () => {
    const products = [
        {
            id: 1,
            name: "Halloween Tumbler",
            img: "https://www.creativefabrica.com/wp-content/uploads/2024/08/02/Hocus-Pocus-halloween-tumbler-wrap-png-Graphics-103070232-1-1-580x387.png", 
            description: "Hocus Pocus Halloween ",
            price: 3
        },
        {
            id: 2,
            name: "Halloween Sublimation",
            img: "https://www.creativefabrica.com/wp-content/uploads/2024/08/02/Halloween-SublimationWitchy-Halloween-Graphics-103055177-1-1-580x387.jpg", 
            description: "Halloween Sublimation ",
            price: 2
        },
        {
            id: 3,
            name: " Pumpkin and Ghost",
            img: "https://www.creativefabrica.com/wp-content/uploads/2023/10/03/Halloween-Pumpkin-and-Ghost-Graphics-80709546-1-1-580x387.png", 
            description: "Halloween Pumpkin and Ghost",
            price: 5
        },
    ];

    return (
        <main>
            <section>
                <h2>Products</h2>
                <div className="card-container">
                        <HooksProduct productsList={products} /> 
                </div>
            </section>
        </main>
    );
}

export default HooksProductsList;