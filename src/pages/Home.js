import React from 'react';
import Hero from '../componennts/Hero';
import Banner from '../componennts/Banner';
import {Link} from 'react-router-dom';
import Services from '../componennts/Services';
import FeaturedRooms from '../componennts/FeaturedRooms';

export default function Home() {
    return (
        <>
            <Hero hero="defaultHero">
                <Banner
                    title="luxurious rooms"
                    subtitle="deluxe rooms starting at $299"
                >
                    <Link to="/rooms" className="btn-primary">
                        our rooms
                    </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
        </>
    );
}
