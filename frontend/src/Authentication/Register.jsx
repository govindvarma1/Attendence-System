import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../Assets/Logo.png";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerRoute } from "../Utils/APIRoutes";
import { isLogin } from "../common/Helpers";

export default function Register() {
  const [state, setState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [show, setShow] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const ToastOptions = {
    position: "bottom-right",
    autoClose: 5000,
    pauseOnHover: true,
    theme: "dark",
    draggable: true,
  };

  const navigate = useNavigate();

  useEffect(() => {
    async function Check() {
      const result = await isLogin();
      if (result === true) {
        navigate("/");
      } else {
        setShow(true);
      }
    }
    Check();
  }, []);

  function handleClickShowPassword() {
    setShowPassword((show) => !show);
  }
  function handleState(event) {
    const { name, value } = event.target;
    setState((prevValue) => ({ ...prevValue, [name]: value }));
  }

  function handleGoogleSignIn() {
    console.log("google sign in");
  }

  function handleNavigate() {
    navigate("/login");
  }

  async function handleSignIn() {
    try {
      if (handleValidate() === true) {
        const response = await fetch(registerRoute, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(state),
        });
        const data = await response.json();
        if (response.status >= 400 && response.status < 500) {
          toast.error(data.msg, ToastOptions);
        } else {
          localStorage.setItem("user", JSON.stringify(data.user));
          navigate("/");
        }
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleValidate() {
    if (
      state.email === "" ||
      state.password === "" ||
      state.confirmPassword === ""
    ) {
      toast.error("Enter all required fields", ToastOptions);
      return false;
    }
    if (state.email.length < 3) {
      toast.error("Enter a valid email", ToastOptions);
      return false;
    }
    if (state.password.length < 8) {
      toast.error("password should have atleast 8 characters", ToastOptions);
      return false;
    }
    if (state.password !== state.confirmPassword) {
      toast.error("password and confirm password should be same", ToastOptions);
      return false;
    }
    return true;
  }

  return (
    <>
      {show === true && (
        <LoginForm>
          <div className="main">
            <img className="logo" src={logo} alt="logo"></img>
            <div className="text-fields">
              <TextField
                label="email"
                name="email"
                value={state.email}
                onChange={handleState}
                size="small"
                variant="outlined"
              />
              <TextField
                label="password"
                name="password"
                value={state.password}
                onChange={handleState}
                type={showPassword ? "text" : "password"}
                size="small"
                variant="outlined"
              />
              <TextField
                label="Confirm Password"
                name="confirmPassword"
                value={state.confirmPassword}
                onChange={handleState}
                type={showPassword ? "text" : "password"}
                size="small"
                variant="outlined"
              />
              <div className="show-password">
                <input
                  type="checkbox"
                  name="showPassword"
                  checked={showPassword === true ? true : false}
                  onChange={handleClickShowPassword}
                />
                <p>show password</p>
              </div>
              <button className="login-button" onClick={handleSignIn}>
                SignUp
              </button>
            </div>
            <p>or signup using</p>
            <div className="google-login" onClick={handleGoogleSignIn}>
              <img
                className="google-logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
                alt="google logo"
              />
              <p className="google-text">SignUp with google</p>
            </div>
            <p>
              already have an account?
              <a className="redirect" onClick={handleNavigate}>
                SignIn
              </a>
            </p>
          </div>
          <ToastContainer />
        </LoginForm>
      )}
    </>
  );
}

const LoginForm = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .main {
    border: 1px solid black;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    width: 400px;
    gap: 1.5rem;
    .logo {
      width: 50%;
    }
    .text-fields {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      .login-button {
        cursor: pointer;
        padding: 0.65rem 0.35rem;
        border-radius: 0.35rem;
        border: none;
        color: white;
        background-color: #01bd70;
        font-weight: 600;
      }
    }
    .show-password {
      display: flex;
      gap: 0.5rem;
    }
    p {
      margin: 0;
    }
    .google-login {
      cursor: pointer;
      background-color: #0076fe;
      padding: 0.5rem;
      width: 100%;
      padding: 0.5rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 0.5rem;
      border-radius: 0.5rem;
      .google-logo {
        height: 2rem;
      }
      .google-text {
        font-weight: 600;
        color: white;
      }
    }
    .redirect {
      color: blue;
      cursor: pointer;
    }
  }
`;
