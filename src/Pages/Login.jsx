import React, { useState, useContext, useEffect } from "react";
import { Box, Button, Input, Text, FormControl } from "@chakra-ui/react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";
import { async } from "q";

export default function LoginPage() {
  const { isAuth, logIn, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [inpEmail, setinpEmail] = useState("");
  const [inpPassword, setinpPassword] = useState("");
  const [toggleLoginSignup, settoggleLoginSignup] = useState(false);
  const [isSignUp, setSignUp] = useState(false);
  const [credentials, setCredentials] = useState([]);

  console.log(isAuth, ">>>>>>>>>");

  const getEmailandPasswordData = async () => {
    const res = await fetch(`http://localhost:8080/logIn`);
    const data = await res.json();
    setCredentials(data);
  };

  useEffect(() => {
    getEmailandPasswordData();
  }, [toggleLoginSignup]);

  if (isAuth) {
    <Navigate to={"/"} />;
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let count = 0;
    for (let i = 0; i < credentials.length; i++) {
      if (
        credentials[i].email === inpEmail &&
        credentials[i].password === inpPassword
      ) {
        logIn();
        setSignUp(true);
        alert(`Succesfully Logedin`);
        setinpEmail("");
        setinpPassword("");
        navigate("/");
        break;
      } else {
        if (count === credentials.length - 1) {
          alert("Invalid Credentials");
          setinpEmail("");
          setinpPassword("");
          //   console.log(count);
        }
        count++;
      }
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:8080/logIn`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: inpEmail,
        password: inpPassword,
      }),
    });
    alert("Successfully Created Account, Kindly login");
    setSignUp(true);
    logOut();
    setinpEmail("");
    setinpPassword("");
  };

  const handleToggle = () => {
    settoggleLoginSignup(!toggleLoginSignup);
  };

  return (
    <Box className="login-page">
      <FormControl className="form">
        <Box style={{ textAlign: "right", marginBottom: "10px" }}>
          <Link
            onClick={handleToggle}
            style={{
              color: "green",
              textAlign: "right",
              fontWeight: "bolder",
              fontSize: "15px",
            }}
          >
            {toggleLoginSignup ? "Sign up" : "Login"}
          </Link>
        </Box>
        <Box>
          <Input
            type="email"
            placeholder="email"
            value={inpEmail}
            color={"black"}
            onChange={(e) => setinpEmail(e.target.value)}
          />
        </Box>
        <Box>
          <Input
            type="password"
            placeholder="password"
            value={inpPassword}
            color={"black"}
            onChange={(e) => setinpPassword(e.target.value)}
          />
        </Box>
        <Box>
          {toggleLoginSignup ? (
            <Button type="submit" onClick={handleFormSubmit}>
              Login
            </Button>
          ) : (
            <Button type="submit" onClick={handleSignUp}>
              Sign Up
            </Button>
          )}
        </Box>
      </FormControl>
      <Box style={{ textAlign: "center" }}>
        <Link className="message" to="/">
          Go Back
        </Link>
      </Box>
    </Box>
  );
}
