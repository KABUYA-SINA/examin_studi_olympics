import React, { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { useBasket } from './BasketContext'; //custum  hook qui viens du BasketContext


//mock function
const mockPayment = () => {
    return Math.random() > 0.5; // 50% de chance de succès
};

const BasketPage = () => {
    const { basket, removeFromBasket, totalPrice } = useBasket();
    const [finalKey, setFinalKey] = useState('');
    const [showQRCode, setShowQRCode] = useState(false);
    const [paymentStatus, setPaymentStatus] = useState(''); // Track le statut du payement
    const [paymentCompleted, setPaymentCompleted] = useState(false); // Track si le payement est un succès

    useEffect(() => {
        // Check le stockage local pour une clé de code QR stockée
        const storedKey = localStorage.getItem('finalKey');
        if (storedKey) {
            setFinalKey(storedKey);
            setShowQRCode(true);
        }
    }, []);

    const handleCheckout = () => {
        const paymentSuccess = mockPayment();
        if (paymentSuccess) {
            const previousKey = generateUniqueKey();
            const newKey = generateUniqueKey();
            const combinedKey = `${previousKey}${newKey}`;
            setFinalKey(combinedKey);
            setShowQRCode(true);
            setPaymentStatus('Paiement réussi !'); // Met le status succès si la commande est passée
            setPaymentCompleted(true);
            localStorage.setItem('finalKey', combinedKey); // Save clé dans le local storage
            alert("Paiement réussi! Votre ticket est en cours de génération.");
            const timer = setTimeout(() => {
                localStorage.removeItem('basket'); // Supprime le panier dans le local
                window.location.reload();
            }, 3000);
            return () => clearTimeout(timer);
        } else {
            setPaymentStatus('Paiement refusé. Veuillez réessayer.'); // Status pour payement refusé
            setShowQRCode(false);
            setPaymentCompleted(false);
        }
    };

    const generateUniqueKey = () => {
        return Math.random().toString(36).substr(2, 10); // Generation d'une clé aleatoire
    };

    if (basket.length === 0) {
        return (
            <div className="panier_vide">
                <h2>Votre Panier est vide !</h2>
            </div>
        );
    }

    return (
        <div className="basket-container">
            <div className="basket">
                <h2>Votre Panier</h2>
                <ul>
                    {basket.map((item, index) => (
                        <li key={`${item._id}-${index}`}>
                            <img src={item.imageUrl} alt={item.altTxt} />
                            <p><span className="bold">Ticket:</span> {item.title}</p>
                            <p><span className="bold">Prix:</span> {item.price} €</p>
                            {!paymentCompleted && (
                                <button type='submit' className='btn_basket' onClick={() => removeFromBasket(item._id)}>Supprimer</button>
                            )}
                        </li>
                    ))}
                </ul>
                <h3>Total Price: {totalPrice()} €</h3>
                {!paymentCompleted && (
                    <button type='submit' className='btn_basket' onClick={handleCheckout}>payement</button>
                )}
            </div>
            {showQRCode && (
                <div className="qr-code">
                    <h3>Votre E-Ticket:</h3>
                    <QRCodeSVG value={finalKey} />
                    <p>Conservez ce code QR dans un endroit sûr pour votre billet.</p>
                </div>
            )}
            {paymentStatus && (
                <div className="payment-status">
                    <h3>{paymentStatus}</h3>
                </div>
            )}
        </div>
    );
};

export default BasketPage;