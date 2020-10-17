import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomList from './RoomList';
import {withRoomConsumer} from '../context';
import Loading from './Loading';

function RoomsContainer({context}){
    const {loading,sortedRooms,rooms} = context;

    if(loading){
                                return <Loading />
                            }
                            return (
                                <div>
                                    <RoomsFilter rooms={rooms}/>
                                    <RoomList rooms={sortedRooms}/>
                                </div>
                            );
}

export default withRoomConsumer(RoomsContainer);

// import React from 'react';
// import RoomsFilter from './RoomsFilter';
// import RoomList from './RoomList';
// import {RoomContext} from '../context';
// import Loading from './Loading';

// const RoomsContainer = () => {
//     return (
//         <RoomContext.Consumer>
//             {
//                 value=>{
//                     const {loading,sortedRooms,rooms} = value;
//                     if(loading){
//                         return <Loading />
//                     }
//                     return (
//                         <div>
//                             Hello from rooms container
//                             <RoomsFilter rooms={rooms}/>
//                             <RoomList rooms={sortedRooms}/>
//                         </div>
//                     );
//                 }
//             }
//         </RoomContext.Consumer>
        
//     );
// };

// export default RoomsContainer;





