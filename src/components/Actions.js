import { useDispatch, useSelector } from 'react-redux';
import { unselectAll } from '../features/users/usersSlice';
import './Actions.css';
const Actions = () => {
  const dispatch = useDispatch();
  const nSelected = useSelector((state) => state.users.nSelected);
  return (
    <div className="actions">
      <div className="n-selected">
        <p>{nSelected} selected</p>
      </div>
      <div className="action">
        <i className="fas fa-pencil"></i>
      </div>
      <div className="action">
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
        <i class="fas fa-ellipsis-v"></i>
      </div>
      <div className="un-selected" onClick={() => dispatch(unselectAll())}>
        <p>Unselect all</p>
      </div>
      <div className="action last-action">
        <i class="fas fa-download"></i>
      </div>
    </div>
  );
};
export default Actions;
