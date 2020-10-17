import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner'
import Services from '../components/Services';
import { Link } from 'react-router-dom';
import FeaturedRooms from '../components/FeaturedRooms';

const Home = (props)=> {
    return (
        <>
            <Hero >
                <Banner title="luxurios rooms"
                        subtitle="deluxe rooms starting at $200">
                    <Link to='/rooms' className='btn-primary'>
                        Our rooms
                    </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
        </>
    );
}

export default Home;