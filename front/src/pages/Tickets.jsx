import React from 'react';
import CardElements from '../services/CallingOffers';
import "../sass/pages/_tickets.scss";

export default function Tickets() {
  return (
    <main className='main_tickets'>
     <h2>Nos Offres Disponibles</h2>
      <CardElements />
    </main>
  )
}