import React from 'react';
import AskMeAnything from './AskMeAnything/AskMeAnything';
import Banner from './Banner/Banner';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            {/* one extra section */}
            <AskMeAnything></AskMeAnything>
        </div>
    );
};

export default Home;