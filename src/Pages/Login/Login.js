import Button from "@restart/ui/esm/Button";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { Container } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import image from "../../images/Authentication-rafiki.svg";

const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/";

  const auth = getAuth();

  const handleBrandLogin = () => {
    signInWithPopup(auth, googleProvider).then(() => {
      history.push(redirect_uri);
    });
  };

  return (
    <Container className=" h-100 w-100">
      <div className="my-4 d-flex ">
        <div className="w-50 ms-auto">
          {" "}
          <img src={image} alt="authenticate" />
        </div>
        <div className="d-flex align-items-center flex-column justify-content-center me-auto">
          <h2>Login</h2>

          <Button className="btn-primary rounded-3" onClick={handleBrandLogin}>
            Google Sign in
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Login;
