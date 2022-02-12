import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './BusChallengeAdd.css'; 

const BusChallengeAdd = () => {
    return(
    <Container className='mymodal'>
        <Row>
            <Col>
            <label>
                Challenge Name:
            </label>
            </Col>
            <Col>
                <input type='text' />
            </Col>
        </Row>
        <Row><Col><label>
                Coin reward:
                </label></Col><Col>
                <input type='text' />
            </Col></Row>

            <label>Challenge Description
                <input type='text' />
            </label>
    </Container>
);}

export default BusChallengeAdd;