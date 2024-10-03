import { useParams } from "react-router-dom";
import React, {useEffect, useState} from "react";
import { getOne } from "../services/prooducts";
import Error from "./Error";
import "../sass/pages/co/_single.scss";
import { useBasket } from './BasketContext';


export default function Single(){

    const { id } = useParams();
    const [offer, setOffer] = useState(null);
    const { addToBasket } = useBasket(); // on recupère addToBasket du context

    useEffect(() => {
        const fetchOffer = async () => {
            try {
                const data = await getOne(id);
                setOffer(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchOffer();
    }, [id]);

    const handleAddToBasket = () => {
        addToBasket(offer.data);
        alert(`${offer.data.title} ticket a été ajouté au panier !`);
    };

    if (!offer) return <Error />;

    return (
        <main className="main_single">
            <h2>Nos Offres: {offer.data.title}</h2>
            <div className="match">
                <img src={offer.data.imageUrl} alt={offer.data.altTxt} data-testid="image_objet_particulier" />
                <p><span className="bold">Id Produit:</span> {offer.data._id}</p>
                <p><span className="bold">Prix:</span> {offer.data.price} €</p>
                <p><span className="bold">Description:</span> {offer.data.description}</p>
                <button type="submit" onClick={handleAddToBasket} className="btn_card" data-testid="btn_card">Ajout Panier</button>
            </div>
        </main>
    );
}