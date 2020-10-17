import React, { Component } from 'react';
import {RoomContext} from '../context';
import Room from './Room';
import Loading from './Loading';
import Title from './Title';

class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
        const {loading,featuredRooms: rooms} = this.context;
        let roomed = rooms.map(room =>{
            return <Room key={room.id} room={room} />
        })

        return (
            <section className="featured-rooms">
                <Title title="featured rooms"/>
                <div className="featured-rooms-center">
                    {loading?<Loading />:roomed}
                </div>
            </section>
                
        );
    }
}

export default FeaturedRooms;