import React, { useEffect, useState } from "react";
import {useDispatch} from "react-redux";
import {Link, useHistory, useLocation} from "react-router-dom";

export default function Navbar() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
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
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/blogs">
                Blogs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/create">
                Create a Blog
              </a>
            </li>
            <li className="nav-item">
              <Link to="/auth" className="nav-link">
                Auth
              </Link>
            </li>
          </ul>
          <div className="mx-auto">
            {user && (
              <ul className="navbar-nav ">
                <img
                  src={user.result.imageUrl}
                  alt=""
                  style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                />
                <li className="nav-item ">
                  <a className="nav-link ">{user.result.name}</a>
                </li>
                <li className="nav-item" onClick = {handleLogout}>
                  <button className=" btn btn-secondary nav-link">Logout</button>
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
