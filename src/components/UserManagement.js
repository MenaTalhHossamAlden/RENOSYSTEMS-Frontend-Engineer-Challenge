import Main from './Main';
import { Container, Row, Col } from 'react-bootstrap';
import './UserManagement.css';
import { useDispatch, useSelector } from 'react-redux';
import { openPopup } from '../features/popup/popupSlice';
import Popup from './Popup';
import Navbar from './Navbar';
const UserManagement = () => {
  const showPopup = useSelector((state) => state.popup.show);
  const dispatch = useDispatch();
  return (
    <>
      {showPopup && <Popup />}
      <Container fluid className="user-management">
        <Row>
          <Col md={3} className="bg-light col">
            <div className="p-3">Sidebar or Details Panel</div>
          </Col>
          <Col md={9} className="bg-light col">
            <Navbar />
            <div className="user-management-body">
              <div className="header">
                <h4>User Management</h4>
                <button onClick={() => dispatch(openPopup())}>
                  <i className="fas fa-plus"></i>Add New
                </button>
              </div>
              <Main />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default UserManagement;
