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
  validateInputs,
} from '../features/popup/popupSlice';
import { addUser, editUser } from '../features/users/usersSlice';
const Popup = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.popup);
  const {
    newOrEdit,
    fullName,
    userName,
    email,
    profile,
    group,
    nameErr,
    userErr,
    emailErr,
    groupErr,
    profileErr,
  } = userData;
  return (
    <div className="popup">
      <div className="popup-window">
        <div className="header">
          {newOrEdit ? <p>Add New User</p> : <p>Edit User</p>}
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
            {nameErr && <p className="error">Please fill out this field</p>}
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
            {userErr && <p className="error">Please fill out this field</p>}
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
            {emailErr && <p className="error">Please enter a valid email</p>}
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
            {groupErr && <p className="error">Please choose a group</p>}
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
            {profileErr && <p className="error">Please choose a profile</p>}
          </div>
        </div>
        <div className="footer">
          <p onClick={() => dispatch(resetFields())}>Reset fields</p>
          <div>
            <button onClick={() => dispatch(closePopup())}>Cancel</button>
            {newOrEdit ? (
              <button
                type="submit"
                onClick={() => {
                  const isValid = dispatch(validateInputs()).payload;
                  if (isValid) {
                    dispatch(addUser({ ...userData }));
                  }
                }}
              >
                Add User
              </button>
            ) : (
              <button
                onClick={() => {
                  dispatch(editUser({ ...userData }));
                  dispatch(closePopup());
                }}
              >
                Edit User
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Popup;
