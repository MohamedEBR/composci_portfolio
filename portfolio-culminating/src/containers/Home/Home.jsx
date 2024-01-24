import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./Home.scss"

const Home = () => {
  return (
    <div id='home'>
        <Container className='app__container'>
            <Row >
                <Col className='home__title'>
                    <Row lg={2}>
                        <div className=' home__shadow'>
                            <h1 className='head-text home__head text-white'>
                                Mohamed Ebraheem
                            </h1>
                            <h2 className='text-white'>
                            Computer Science ICS 4U0 Data Structures & Algorithms Portfolio
                            </h2>
                        </div>
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>

  )
}

export default Home