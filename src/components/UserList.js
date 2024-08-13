import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './UserList.css';
import { useSelector } from 'react-redux';
const UserList = () => {
  const users = useSelector((state) => state.users);
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, 0.2)`;
  };
  return (
    <table className="table table-hover user-list">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Username</th>
          <th scope="col">Email</th>
          <th scope="col">Group</th>
          <th scope="col">Status</th>
          <th scope="col">Created On</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          const backgroundColor = getRandomColor();
          return (
            <tr key={user.id}>
              <td className="name">
                <input type="checkbox" />
                <div
                  className="initials-circle"
                  style={{ background: backgroundColor }}
                >
                  {user.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                {user.name}
              </td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.group}</td>
              <td className="status">{user.status}</td>
              <td>{user.createdOn}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UserList;
