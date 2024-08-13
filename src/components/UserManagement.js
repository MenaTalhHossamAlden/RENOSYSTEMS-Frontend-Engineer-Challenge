import Main from './Main';
import { Container, Row, Col } from 'react-bootstrap';
const UserManagement = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={3} className="bg-light">
          <div className="p-3">Sidebar or Details Panel</div>
        </Col>
        <Col md={9}>
          <h3>User Management</h3>
          <Main />
        </Col>
      </Row>
    </Container>
  );
};
export default UserManagement;
