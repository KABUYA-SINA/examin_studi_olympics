import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        // Check localStorage pour status de co
        return localStorage.getItem('isLoggedIn') === 'true';
    });

    const login = () => {
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true'); // Save le status de connexion
    };

    const logout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('TOKEN');
        localStorage.removeItem('Name');
        localStorage.removeItem('User');
        localStorage.removeItem('Adm');
        localStorage.removeItem('basket');
        localStorage.removeItem('finalKey')
        window.location.reload();
        localStorage.removeItem('isLoggedIn'); // Enleve le status
    };

    useEffect(() => {
        // Optionel: posssible d'ajouter les options (effects,  cleanup)
    }, [isLoggedIn]);

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};