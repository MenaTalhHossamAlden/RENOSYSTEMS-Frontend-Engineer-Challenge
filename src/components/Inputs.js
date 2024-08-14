import {
  filterUsers,
  setCreationDate,
  setStatus,
  setSearchTerm,
} from '../features/users/usersSlice';
import './Inputs.css';
import { useDispatch, useSelector } from 'react-redux';
const Inputs = () => {
  const dispatch = useDispatch();
  const { status, searchTerm, creationDate } = useSelector(
    (state) => state.users
  );
  return (
    <div className="inputs">
      <div className="field" id="search">
        <span>
          <i className="fas fa-search"></i>
        </span>
        <input
          type="search"
          className="field-input"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
        />
      </div>
      <div className="field" id="username">
        <input type="text" className="field-input" placeholder="User Name" />
      </div>
      <div className="field" id="status">
        <span>User Status</span>
        <select
          name="status"
          className="field-input"
          value={status}
          onChange={(e) => dispatch(setStatus(e.target.value))}
        >
          <option value="any" disabled>
            Any
          </option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>
      <div className="field" id="creation-date">
        <span>Creation Date</span>
        {!creationDate && (
          <span className="creation-date-default">All Time</span>
        )}
        <input
          className="field-input"
          type="date"
          id="date"
          style={{ color: creationDate ? 'black' : 'transparent' }}
          value={creationDate}
          onChange={(e) => dispatch(setCreationDate(e.target.value))}
        />
      </div>
      <div className="filters">All Filters</div>
    </div>
  );
};
export default Inputs;
