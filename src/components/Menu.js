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
    </div>
  );
};
export default Menu;
