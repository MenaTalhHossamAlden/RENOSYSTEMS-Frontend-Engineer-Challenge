import { useDispatch, useSelector } from 'react-redux';
import { unselectAll, removeSelectedUsers } from '../features/users/usersSlice';
import './Actions.css';
import { openPopup } from '../features/popup/popupSlice';
const Actions = () => {
  const dispatch = useDispatch();
  const { nSelected, selectedUsers } = useSelector((state) => state.users);
  return (
    <div className="actions">
      <div className="n-selected">
        <p>{nSelected} selected</p>
      </div>
      <div
        className="action"
        onClick={() => {
          if (selectedUsers.length != 1)
            alert('you can only edit 1 user at a time');
          else dispatch(openPopup({ type: 'edit', user: selectedUsers }));
        }}
      >
        <i className="fas fa-pencil"></i>
      </div>
      <div className="action" onClick={() => dispatch(removeSelectedUsers())}>
        <i className="fas fa-ban"></i>
      </div>
      <div className="action">
        <i className="fas fa-lock"></i>
      </div>
      <div className="action">
        <p>Assign to Profile</p>
      </div>
      <div className="action">
        <p>Assign to Group</p>
      </div>
      <div className="action">
        <i className="fas fa-ellipsis-v"></i>
      </div>
      <div className="un-selected" onClick={() => dispatch(unselectAll())}>
        <p>Unselect all</p>
      </div>
      <div className="action last-action">
        <i className="fas fa-download"></i>
      </div>
    </div>
  );
};
export default Actions;
