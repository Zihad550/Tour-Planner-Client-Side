import { getAuth, GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import React from "react";
import { Button, Container } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";
import img from "../../images/Authentication-rafiki.svg";

const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const auth = getAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/";

  const { googleLogin, user } = useAuth();
  const handleBrandLogin = () => {
    /* googleLogin().then(() => {
      history.push(redirect_uri);
    }); */
    signInWithPopup(auth, googleProvider).then(() => {
      history.push(redirect_uri);
    });
  };
  return (
    <Container className="">
      <div className="d-flex ">
        <div className="w-25 ms-auto">
          <img src={img} className="img-fluid" alt="authenticate" />
        </div>
        <div className="d-flex align-items-center flex-column justify-content-center me-auto">
          <h2>Login </h2>
          <Button onClick={handleBrandLogin} variant="primary">
            Google Sign In
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Login;
