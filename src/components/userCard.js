import React, { useState, useEffect } from "react";
import Loading from "./Loading";

export default function UserList({ visible }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data.data);
        setLoading(false);
        console.log(visible);
      })
      .catch((error) => console.error(error));
  }, []);
  console.log("Hi bro");
  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center w-100"
        style={{ height: "100vh" }}
      >
        <div
          className="spinner-border text-primary bg-transparent mx-auto p-auto"
          role="status"
        >
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="container" style={{ display: visible ? "block" : "none" }}>
      <h1>Users</h1>
      <div className="row">
        {users.map((user) => (
          <div key={user.id} className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img
                src={user.avatar}
                alt={user.first_name + " " + user.last_name}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">
                  {user.first_name + " " + user.last_name}
                </h5>
                <p className="card-text">{user.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
