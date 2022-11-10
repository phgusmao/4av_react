import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '../../components/Card/Card';

const User = () => {
  return (
    <Container className='pt-5'>
      <h3>Login</h3>
      <Row>
        <Col md={4}>
          <Card titulo="nome de usuário" descricao="senha" button="entrar" />
        </Col>
      </Row>
    </Container>
  )
}

export default User;