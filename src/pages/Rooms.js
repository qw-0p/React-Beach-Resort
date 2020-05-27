import React from 'react';
import Hero from '../componennts/Hero';
import Banner from '../componennts/Banner';
import {Link} from 'react-router-dom';

export default function Rooms() {
    return (
        <Hero hero="roomsHero">
            <Banner title="our rooms">
                <Link to="/" className="btn-primary">
                    return home
                </Link>
            </Banner>
        </Hero>
    );
}
