import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import { useDispatch } from "react-redux";
const Auth = () => {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  const dispatch = useDispatch();
  const successGoogle = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: "AUTH", payload: { result, token } });
    } catch (error) {
      console.log(error);
    }
  };
  const failureGoogle = () => {
    console.log("Google sign in failure");
  };
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
                <input type="text" id="form3Example1" class="form-control" />
                <label class="form-label" for="form3Example1">
                  First name
                </label>
              </div>
            </div>
            <div class="col">
              <div class="form-outline">
                <input type="text" id="form3Example2" class="form-control" />
                <label class="form-label" for="form3Example2">
                  Last name
                </label>
              </div>
            </div>
          </div>
        )}
        <div class="form-outline mb-4">
          <input type="email" id="form1Example1" class="form-control" />
          <label class="form-label" for="form1Example1">
            Email address
          </label>
        </div>

        <div class="form-outline mb-4">
          <input type="password" id="form1Example2" class="form-control" />
          <label class="form-label" for="form1Example2">
            Password
          </label>
        </div>
        {!toggle && (
          <div class="form-outline mb-4">
            <input type="password" id="form1Example2" class="form-control" />
            <label class="form-label" for="form1Example2">
              Repeat Password
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
          <a class="btn btn-primary mt-2 px-5">
            {!toggle ? " Sign Up" : " Sign In"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Auth;
