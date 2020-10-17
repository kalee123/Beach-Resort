import React from 'react';

function Hero(props) {
    const {children,hero} = props;
    return (
        <header className={hero}>
            {children}
        </header>
    );
}

Hero.defaultProps = {
    hero: 'defaultHero'
}

export default Hero;