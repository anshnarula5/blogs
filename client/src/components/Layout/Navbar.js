import React, { useEffect, useState } from "react";
import {useDispatch} from "react-redux";
import {Link, useHistory, useLocation} from "react-router-dom";

export default function Navbar() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  console.log(user);
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()
  const handleLogout = () => {
    dispatch({type : "LOGOUT"})
    history.push("/blogs")
    setUser(null)
  }
  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNav">
          <ul class="navbar-nav ">
            <li class="nav-item">
              <a class="nav-link " aria-current="page" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/blogs">
                Blogs
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/create">
                Create a Blog
              </a>
            </li>
            <li class="nav-item">
              <Link to="/auth" className="nav-link">
                Auth
              </Link>
            </li>
          </ul>
          <div className="mx-auto">
            {user && (
              <ul class="navbar-nav ">
                <img
                  src={user.result.imageUrl}
                  alt=""
                  style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                />
                <li class="nav-item ">
                  <a class="nav-link ">{user.result.name}</a>
                </li>
                <li class="nav-item" onClick = {handleLogout}>
                  <button class=" btn btn-secondary nav-link">Logout</button>
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="user"></div>
      </div>
    </nav>
  );
}
