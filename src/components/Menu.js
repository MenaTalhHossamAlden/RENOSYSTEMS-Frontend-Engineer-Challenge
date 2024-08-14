import './Menu.css';
import logo from '../assets/logo.png';
const Menu = () => {
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
      <div className="settings-item">
        <p>ATM Settings</p>
        <i class="fas fa-chevron-down"></i>
      </div>
      <div className="settings-item">
        <p>Business Setup</p>
        <i class="fas fa-chevron-down"></i>
      </div>
      <div className="settings-item">
        <p>User Management</p>
        <i class="fas fa-chevron-down"></i>
      </div>
      <div className="settings-item">
        <p>License Management</p>
      </div>
    </div>
  );
};
export default Menu;
