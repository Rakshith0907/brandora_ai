import React from "react";
import "./Login.css";
 
const Login = ({name,pass,setLoggedIn}) => {

  const login = (e) => {
    e.preventDefault()
    // console.log(name.current.value)
    // console.log(pass.current.value)
    if(name.current.value === "admin" && pass.current.value==="12345"){
      setLoggedIn(true)
    }
    else{
      alert("username and password does not match. please enter valid credentials")
    }

  }

  return (
    <div className="login-comp">
      {/* <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div> */}
      <form onSubmit={login}>
        <h3>Login Here</h3>

        <label for="username">Username</label>
        <input ref={name} type="text" placeholder="Username" id="username" />

        <label for="password">Password</label>
        <input ref={pass} type="password" placeholder="Password" id="password" />

        <button>Log In</button>
        {/* <div className="social">
          <div className="go">
            <i className="fab fa-google"></i> Google
          </div>
          <div className="fb">
            <i className="fab fa-facebook"></i> Facebook
          </div>
        </div> */}
      </form>
    </div>
  );
};

export default Login;
