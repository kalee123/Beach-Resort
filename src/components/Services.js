import React, { Component } from 'react';
import Title from './Title';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from "react-icons/fa";

class Services extends Component {
    state = {
        services:[
            {
                icon:<FaCocktail />,
                title:"free cocktails",
                info:"This free cocktail recipe offers a blend of sweet and sour flavors. Pour whiskey, lemon juice and simple syrup into an ice-filled mixer."
            },
            {
                icon:<FaHiking />,
                title:"Endless Hiking",
                info:"Endless Hikes documents some of the adventures to be had on these treks and provides some tips on how best to travel safely"
            },
            {
                icon:<FaShuttleVan />,
                title:"Free shuttle",
                info:"A free shuttle service will take you to a private beach and dive centre."
            },
            {
                icon:<FaBeer />,
                title:"Strongest Beer",
                info:"The free beer is one of life's simple pleasures. Yes, shelling out more for booze will make your brain tell you it tastes better than a cheap bottle."
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title='services' />
                <div className="services-center">
                    {this.state.services.map((item,index)=>{
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        );
    }
}

export default Services;