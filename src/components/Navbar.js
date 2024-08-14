import { useSelector } from 'react-redux';
import './Navbar.css';
const Navbar = () => {
  const { currUser, notifications } = useSelector((state) => state.navbar);
  function formatNumber() {
    if (notifications > 9) {
      return '9+';
    }
    return notifications.toString();
  }
  const date = new Date();
  const formattedDate = date.toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
  const formattedDateWithSpace = formattedDate.replace(',', '');
  const formattedTime = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
  return (
    <div className="navbar">
      <div className="navbar-left">
        <i class="fas fa-angle-left"></i>
        <i class="fas fa-bars"></i>
        <p>Good Morning!</p>
        <p>{formattedDateWithSpace}</p>
        <p>{formattedTime}</p>
      </div>
      <div className="navbar-right">
        <i className="far fa-question-circle"></i>
        <div className="notifications">
          <div className="count">{formatNumber()}</div>
          <i class="fas fa-bell"></i>
        </div>
        <div className="curr-user">
          <p>{currUser}</p>
          <div className="initials-circle">
            {currUser
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </div>
          <i className="fas fa-angle-down"></i>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
