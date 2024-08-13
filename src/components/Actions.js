import { useSelector } from 'react-redux';
import './Actions.css';
const Actions = () => {
  const nSelected = useSelector((state) => state.users.nSelected);
  return (
    <div className="actions">
      <div className="n-selected">
        <p>{nSelected} selected</p>
      </div>
      <div className="action"></div>
    </div>
  );
};
export default Actions;
