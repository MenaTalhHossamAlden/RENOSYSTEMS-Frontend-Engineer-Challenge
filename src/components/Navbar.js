import './Navbar.css';
const Navbar = () => {
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
        <p>Good Morning!</p>
        <p>{formattedDateWithSpace}</p>
        <p>{formattedTime}</p>
      </div>
    </div>
  );
};
export default Navbar;
