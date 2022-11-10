import React from 'react';
import { Link } from 'react-router-dom';


const Users = ({ users }) => {
  if (!users) return null; // users가 유효하지 않다면 아무것도 보여 주지 않음
  return (
    <div>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={/users/</span><span class="co49">${</span><span class="cd2 co34">user</span><span class="cd2 co31">.</span><span class="cd2 co34">id</span><span class="co33">}</span><span class="cd2 co31">}>{user.username}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};



export default Users;