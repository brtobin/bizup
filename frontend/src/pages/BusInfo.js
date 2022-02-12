import React from 'react';
import challengeItem from '../components/ChallengeItem/challengeItem';

const BusInfo = () => {
    
    let info = {
        name: 'Target',
        email: 'target@yahoo.com',
        address: '1234 Sun Drive',
        description: 'It is in the sun, directly in it',
        challenges: 'this should not be a string'
    }
    return(
        <React.Fragment>
            <img src='https://img.icons8.com/doodle/48/000000/address-book.png'></img>
            <h1>{info.name}</h1>
            <p>email: {info.email}</p>
            <p>address: {info.address}</p>
            <p>description: {info.description}</p>
            <p>challenges: {info.challenges}</p>




        </React.Fragment>
        
    );

}

export default BusInfo;