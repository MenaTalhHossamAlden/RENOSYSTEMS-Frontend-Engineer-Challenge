import UserList from './UserList';
import './Main.css';
const Main = () => {
  return (
    <div className="main">
      <input type="text" className="search-bar" />
      <UserList />
    </div>
  );
};
export default Main;
