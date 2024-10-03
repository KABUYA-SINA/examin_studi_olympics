import React from 'react';
import { Link } from 'react-router-dom';
import { MdFamilyRestroom } from "react-icons/md";
import { FaPerson } from "react-icons/fa6";
import { GiLovers } from "react-icons/gi";
import "../sass/pages/_cards.scss";

export default function Cards({_id, title, icon }) {

  return (
    <Link to={`/Single/${_id}`} data-testid={`ticket-${_id}`}>
      <div key={_id} className='card'>
        <h2>{title}</h2>
        <div className='icon'>
          {icon === 'family' ? <MdFamilyRestroom /> : icon === 'person' ? <FaPerson /> : icon === 'people' ? <GiLovers /> : "" }
        </div>
      </div>
    </Link>
  )
}
