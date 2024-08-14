import './Menu.css';
import logo from '../assets/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { toggleItem } from '../features/menu/menuSlice';
const Menu = () => {
  const dispatch = useDispatch();
  const { ATM, Business, User } = useSelector((state) => state.menu);
  return (
    <div className="menu">
      <img src={logo} alt="logo" />
      <div className="search">
        <input
          type="search"
          className="field-input"
          placeholder="Quick access"
        />
        <span>
          <i className="fas fa-search"></i>
        </span>
      </div>
      <div className="dashboard">
        <i class="fab fa-microsoft"></i>
        <p>Dashboard</p>
      </div>
      <div className="settings">
        <p>SETTINGS</p>
      </div>
      <div
        className={`settings-item ${ATM.show ? 'clicked-item' : ''}`}
        onClick={() => {
          dispatch(toggleItem('ATM'));
        }}
      >
        <p>ATM Settings</p>
        {ATM.show ? (
          <i class="fas fa-chevron-up"></i>
        ) : (
          <i class="fas fa-chevron-down"></i>
        )}
      </div>
      <div
        className={`settings-item ${Business.show ? 'clicked-item' : ''}`}
        onClick={() => {
          dispatch(toggleItem('Business'));
        }}
      >
        <p>Business Setup</p>
        {Business.show ? (
          <i class="fas fa-chevron-up"></i>
        ) : (
          <i class="fas fa-chevron-down"></i>
        )}
      </div>
      <div
        className={`settings-item ${User.show ? 'clicked-item' : ''}`}
        onClick={() => {
          dispatch(toggleItem('User'));
        }}
      >
        <p>User Management</p>
        {User.show ? (
          <i class="fas fa-chevron-up"></i>
        ) : (
          <i class="fas fa-chevron-down"></i>
        )}
      </div>
      {User.show && (
        <>
          <div className="settings-subitem">
            <p>Users</p>
          </div>
          <div className="settings-subitem">
            <p>Profiles</p>
          </div>
          <div className="settings-subitem">
            <p>Groups</p>
          </div>
        </>
      )}
      <div className="settings-item">
        <p>License Management</p>
      </div>
    </div>
  );
};
export default Menu;
