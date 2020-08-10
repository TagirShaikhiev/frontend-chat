import React, { useState } from 'react';
import './Header.css'
import { LogoHeader } from './logoHeader';
import { RoomTitle } from './RoomTitle';
import { Person } from './Person';

type Props = {
    chatroomName: String;
    me: Person
}

export const Header: React.FC<Props> = (props) => {
    // const [name: String, setName: String] = useState(props.me.name ? props.me.name : props.me.uuid.substr(-10))

    //     const handleChangeName = (e) => {
    //         setName(e.target.value)
    //         let visitor = {...props.me};
    //         visitor.name = e.target.value;
    //         props.updateVisitor(visitor)
//     }
    return (
        <header className="header">
             {/* <LogoHeader/> */}
             <RoomTitle chatroomName={props.chatroomName}/>
{/* 
//             {
//                 props.me ? 
//                     <input
//                         className='name-input'
//                         value={name}
//                         placeholder='Ваше имя'
//                         onChange={(e) => handleChangeName(e)}
//                     />
//                 : null
//             } 
*/}
        </header>
    ); 
}


// function Header(props) {
//     const [name, setName] = useState(props.me.name ? props.me.name : props.me.uuid.substr(-10))

//     const handleChangeName = (e) => {
//         setName(e.target.value)
//         let visitor = {...props.me};
//         visitor.name = e.target.value;
//         props.updateVisitor(visitor)
//     }

//     return (
//         <header>
//             <LogoHeader/>
//             <RoomTitle chatroomName={props.chatroomName}/>
//             {
//                 props.me ? 
//                     <input
//                         className='name-input'
//                         value={name}
//                         placeholder='Ваше имя'
//                         onChange={(e) => handleChangeName(e)}
//                     />
//                 : null
//             }
//         </header>
//     );
// }