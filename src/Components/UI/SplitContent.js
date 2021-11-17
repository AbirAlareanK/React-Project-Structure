import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const SplitContent = (props) => {
    return (
      <Container fluid>
        <Row >
          <Col sm={8}>
            {props.left}
          </Col>
          <Col sm={4}>
            {props.right}
          </Col>
        </Row>
      </Container>
    );
}

export default SplitContent;