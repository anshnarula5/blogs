import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import { useDispatch } from "react-redux";
import {useHistory} from "react-router";
const initialState = {firstName: '', lastName: "", email: "", password: "", confirmPassword : ""}
const Auth = () => {
  const [toggle, setToggle] = useState(true);
  const [formData, setFormData] = useState(initialState)
  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  const dispatch = useDispatch();
  const history = useHistory();
  const successGoogle = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: "AUTH", payload: { result, token } });
      history.push("/blogs");
    } catch (error) {
      console.log(error);
    }
  };
  const failureGoogle = () => {
    console.log("Google sign in failure");
  };
  const handleSubmit = () => {
    console.log(formData)
  }
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name] : e.target.value})
  }
  return (
    <div className="row mt-4 px-1">
      <div className="border shadow col-md-5 offset-md-3 p-4">
        <div className="display-4 text-center mb-4">
          {toggle ? "Sign In" : "Sign Up"}
        </div>
        {!toggle && (
          <div class="row mb-4">
            <div class="col">
              <div class="form-outline">
                <input name = "firstName" type="text" id="firstName" class="form-control" onChange={handleChange}/>
                <label class="form-label" for="firstName">
                  First name
                </label>
              </div>
            </div>
            <div class="col">
              <div class="form-outline">
                <input name = "lastName" type="text" id="lastName" class="form-control" onChange={handleChange}/>
                <label class="form-label" for="lastName">
                  Last name
                </label>
              </div>
            </div>
          </div>
        )}
        <div class="form-outline mb-4">
          <input name = "email" type="email" id="email" class="form-control" onChange={handleChange}/>
          <label class="form-label" for="email">
            Email address
          </label>
        </div>

        <div class="form-outline mb-4">
          <input name = "password" type="password" id="password" class="form-control" onChange={handleChange}/>
          <label class="form-label" for="password">
            Password
          </label>
        </div>
        {!toggle && (
          <div class="form-outline mb-4">
            <input name = "confirmPassword" type="password" id="confirmPassword" class="form-control" onChange={handleChange}/>
            <label class="form-label" for="confirmPassword">
              Confirm Password
            </label>
          </div>
        )}

        <div class="row mb-4">
          <div class="col d-flex justify-content-center">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="form1Example3"
                checked
              />
              <label class="form-check-label" for="form1Example3">
                {" "}
                Remember me{" "}
              </label>
            </div>
          </div>

          <div class="col">
            <a href="#!">Forgot password?</a>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center">
          <p>
            {toggle ? "Dont have an account ?" : "Already have an account ?"}
            <a
              onClick={handleToggle}
              className="text-primary"
              style={{ cursor: "pointer" }}
            >
              {toggle ? " Sign Up" : " Sign In"}
            </a>
          </p>
          <a class="btn btn-primary mt-2 px-5" onClick = {handleSubmit}>
            {!toggle ? " Sign Up" : " Sign In"}
          </a>
          <GoogleLogin
            clientId="1091410579943-8he3pma3mhj2k8rk5lohplumqu8ksbvm.apps.googleusercontent.com"
            onSuccess={successGoogle}
            onFailure={failureGoogle}
            render={(renderedProps) => (
              <button
                className="btn btn-secondary mt-2 px-4"
                onClick={renderedProps.onClick}
                disabled={renderedProps.disabled}
              >
                Sign in with <i class="fab fa-google"></i>
              </button>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Auth;
