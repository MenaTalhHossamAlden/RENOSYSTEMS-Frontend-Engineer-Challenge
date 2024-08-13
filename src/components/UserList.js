import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './UserList.css';
import { useDispatch, useSelector } from 'react-redux';
import { setSelected } from '../features/users/usersSlice';
const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
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
          const backgroundColor = user.color;
          return (
            <tr key={user.id}>
              <td className="name">
                <input
                  type="checkbox"
                  onChange={() =>
                    dispatch(
                      setSelected({
                        userId: user.id,
                        isSelected: !user.isSelected,
                      })
                    )
                  }
                />
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
