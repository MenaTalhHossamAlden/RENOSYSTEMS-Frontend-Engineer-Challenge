import { useDispatch, useSelector } from 'react-redux';
import './Popup.css';
import {
  closePopup,
  resetFields,
  setEmail,
  setFullName,
  setGroup,
  setProfile,
  setUserName,
} from '../features/popup/popupSlice';
import { addUser } from '../features/users/usersSlice';
const Popup = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.popup);
  const { fullName, userName, email, profile, group } = userData;
  return (
    <div className="popup">
      <div className="popup-window">
        <div className="header">
          <p>Add New User</p>
          <i
            className="fas fa-times"
            onClick={() => dispatch(closePopup())}
          ></i>
        </div>
        <div className="body">
          <div className="add-field">
            <p>Full Name</p>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter full name"
              value={fullName}
              onChange={(e) => dispatch(setFullName(e.target.value))}
            />
          </div>
          <div className="add-field">
            <p>User Name</p>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter username"
              value={userName}
              onChange={(e) => dispatch(setUserName(e.target.value))}
            />
          </div>
          <div className="add-field">
            <p>Email Address</p>
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter user email address"
              value={email}
              onChange={(e) => dispatch(setEmail(e.target.value))}
            />
          </div>
          <div className="add-field">
            <p>User Group</p>
            <select
              name=""
              id=""
              value={group}
              onChange={(e) => dispatch(setGroup(e.target.value))}
            >
              <option value="Choose User Group" disabled>
                Choose User Group
              </option>
              <option value="Office">Office</option>
              <option value="Managers">Managers</option>
              <option value="Head Office">Head Office</option>
            </select>
          </div>
          <div className="add-field">
            <p>Choose Profile</p>
            <select
              name=""
              id=""
              value={profile}
              onChange={(e) => dispatch(setProfile(e.target.value))}
            >
              <option value="Choose Profile" disabled>
                Choose Profile
              </option>
              <option value="Locked">Locked</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>
        <div className="footer">
          <p onClick={() => dispatch(resetFields())}>Reset fields</p>
          <div>
            <button onClick={() => dispatch(closePopup())}>Cancel</button>
            <button onClick={() => dispatch(addUser({ ...userData }))}>
              Add User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Popup;
