import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const navigate = useNavigate();

    const {name, img, description, price} = service;
    return (
        <div className='service-list'>
            <img src={img} alt="" />
            <h4 className='info'>{name}</h4>
            <p className='info'>{description}</p>
            <p>Hire me: ${price}</p>
            <button className='button' onClick={() => navigate('/checkout')}>Book Any Service</button>
        </div>
    );
};

export default Service;