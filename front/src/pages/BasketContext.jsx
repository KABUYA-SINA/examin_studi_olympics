import React, { createContext, useContext, useState, useEffect } from 'react';
import "../sass/pages/co/_baskets.scss";

// creattion context pour panier
const BasketContext = createContext();

// creation provider pour les achats
export const BasketProvider = ({ children }) => {
    const [basket, setBasket] = useState(() => {
        // Charger le panier à partir du localStorage si disponible
        const storedBasket = localStorage.getItem('basket');
        return storedBasket ? JSON.parse(storedBasket) : [];
    });

    const addToBasket = (item) => {
        setBasket((prevBasket) => {
            // Creation d'un nouveau panier avec le nouvel article ajouté
            const newBasket = [...prevBasket, item];
            // Save le nouveau panier dans localStorage
            localStorage.setItem('basket', JSON.stringify(newBasket));
            return newBasket;
        });
    };

    const removeFromBasket = (id) => {
        setBasket((prevBasket) => {
            const newBasket = prevBasket.filter(item => item._id !== id);
            // Update localStorage avec le nouveau panier
            localStorage.setItem('basket', JSON.stringify(newBasket));
            return newBasket;
        });
    };

    const totalPrice = () => {
        return basket.reduce((total, item) => total + item.price, 0);
    };

    useEffect(() => {
        // Update localStorage chaque fois que le panier change
        localStorage.setItem('basket', JSON.stringify(basket));
    }, [basket]);

    return (
        <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket, totalPrice }}>
            {children}
        </BasketContext.Provider>
    );
};

// Creation d'un hook custum pour utiliser avec BasketContext
export const useBasket = () => {
    return useContext(BasketContext);
};
