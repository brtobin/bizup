import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './BusChallengeAdd.css'; 

const BusChallengeAdd = () => {
    return(
        <form className='mymodal'>
        
            <label>
                Challenge Name:
            </label>
           
                <input type='text' />
           
        <label>
                Coin reward:
                </label>
                <input type='text' />
          

            <label>Challenge Description
                <input type='text' />
            </label>

    </form>
);}

export default BusChallengeAdd;