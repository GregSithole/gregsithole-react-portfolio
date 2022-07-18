import React from 'react';
import { RiBriefcase2Line, RiPencilRuler2Line } from 'react-icons/ri';

const Card = (props) => {
    return (
        <div className="timeline__item">
            {props.category === 'experience' ? <RiBriefcase2Line className='icon' /> : <RiPencilRuler2Line className='icon' />}
            <span className="timeline__date">{props.year}</span>
            <h3 className="timeline__title">{props.title}</h3>
            <p className="timeline__text">{props.desc}</p>
        </div>
    )
}

export default Card