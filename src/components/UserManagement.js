import Main from './Main';
import { Container, Row, Col } from 'react-bootstrap';
import './UserManagement.css';
const UserManagement = () => {
  return (
    <Container fluid className="user-management">
      <Row>
        <Col md={3} className="bg-light">
          <div className="p-3">Sidebar or Details Panel</div>
        </Col>
        <Col md={9} className="bg-light">
          <h4>User Management</h4>
          <Main />
        </Col>
      </Row>
    </Container>
  );
};
export default UserManagement;
