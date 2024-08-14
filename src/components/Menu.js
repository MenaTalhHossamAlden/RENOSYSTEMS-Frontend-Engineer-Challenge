import './Menu.css';
import logo from '../assets/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import {
  handleSearch,
  toggleItem,
  toggleSubItem,
} from '../features/menu/menuSlice';
const Menu = () => {
  const dispatch = useDispatch();
  const { searchTerm, filtered } = useSelector((state) => state.menu);
  return (
    <div className="menu">
      <img src={logo} alt="logo" />
      <div className="search">
        <input
          type="search"
          className="field-input"
          placeholder="Quick access"
          onChange={(e) => dispatch(handleSearch(e.target.value))}
          value={searchTerm}
        />
        <span>
          <i className="fas fa-search"></i>
        </span>
      </div>
      <div className="dashboard">
        <i className="fab fa-microsoft"></i>
        <p>Dashboard</p>
      </div>
      <div className="settings">
        <p>SETTINGS</p>
      </div>
      {filtered.map((item) => (
        <div className="setting-menu" key={item.name}>
          <div
            className={`settings-item ${item.show ? 'clicked-item' : ''}`}
            onClick={() => {
              dispatch(toggleItem(item.name));
            }}
          >
            <p>{item.name}</p>
            {item.show ? (
              <i className="fas fa-chevron-up"></i>
            ) : (
              <i className="fas fa-chevron-down"></i>
            )}
          </div>
          {item.subItems &&
            item.subItems.map((subitem) =>
              item.show ? (
                <div
                  key={subitem.name}
                  className={`settings-subitem ${
                    subitem.show ? 'clicked-subitem' : ''
                  }`}
                  onClick={() => {
                    dispatch(toggleSubItem(subitem.name));
                  }}
                >
                  <p>{subitem.name}</p>
                </div>
              ) : null
            )}
        </div>
      ))}
      <div className="settings-item">
        <p>License Management</p>
      </div>
    </div>
  );
};
export default Menu;
