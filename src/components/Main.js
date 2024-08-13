import './Main.css';
import UserList from './UserList';
import Inputs from './Inputs';
import Actions from './Actions';
const Main = () => {
  return (
    <div className="main">
      <Inputs />
      <Actions />
      <UserList />
    </div>
  );
};
export default Main;
