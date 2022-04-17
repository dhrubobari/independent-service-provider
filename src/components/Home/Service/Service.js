import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {name, img, description, price} = service;
    return (
        <div className='service-list'>
            <img src={img} alt="" />
            <h4 className='info'>{name}</h4>
            <p className='info'>{description}</p>
            <p>Hire me: ${price}</p>
            <button className='button'>Book Any Service</button>
        </div>
    );
};

export default Service;