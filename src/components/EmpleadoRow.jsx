import { Col, ListGroup, Row } from 'react-bootstrap';

const EmpleadoRow = ( {empleado} ) => {
    const { department, fullName, id, pic, title } = {...empleado};
  return (
    <ListGroup.Item>
    <Row className='py-3'>
        <Col md={3} className='text-center text-md-start'>
            <img src={pic} alt="persona" className='empeladoAvatar rounded-circle'/>
        </Col>
        <Col md = {9}>
            <h5>{fullName}</h5>
            <p>
                {title} <span className='badge text-bg-primary'>{department}</span>
            </p>
        </Col>
    </Row>
    </ListGroup.Item>
  )
}

export default EmpleadoRow;