import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect( ()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <div id="services" className='text-center'>
            <div className=''>
            <p className='mt-5'>SERVICES</p>
            <h2>My Services</h2>
            <div className='services-container'>
                {
                    services.map(service => <Service
                    key={service.id}
                    service={service}
                    ></Service>)
                }
            </div>
            </div>
        </div>
    );
};

export default Services;