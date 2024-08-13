import Main from './Main';
import { Container, Row, Col } from 'react-bootstrap';
import './UserManagement.css';
import { useDispatch, useSelector } from 'react-redux';
import { openPopup } from '../features/popup/popupSlice';
import Popup from './Popup';
const UserManagement = () => {
  const showPopup = useSelector((state) => state.popup.show);
  const dispatch = useDispatch();
  return (
    <>
      {showPopup && <Popup />}
      <Container fluid className="user-management">
        <Row>
          <Col md={3} className="bg-light">
            <div className="p-3">Sidebar or Details Panel</div>
          </Col>
          <Col md={9} className="bg-light">
            <div className="header">
              <h4>User Management</h4>
              <button onClick={() => dispatch(openPopup())}>
                <i className="fas fa-plus"></i>Add New
              </button>
            </div>
            <Main />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default UserManagement;
