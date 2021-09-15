import React from "react";
// import data from "./data";
const Users = ({ users, setUsers }) => {
  return users.map((user) => {
    return (
      <article key={user.id} className="users">
        <img src={user.image} alt="" />
        <div>
          <h4>{user.name}</h4>
          <p>{ user.age} years</p>
        </div>
      </article>
    );
  });
};

export default Users;
