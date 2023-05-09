import React, { useState, useContext, useEffect } from "react";
import { Box, Button, Input, Text, FormControl } from "@chakra-ui/react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";

export default function LoginPage() {
  const { isAuth, logIn, logOut, personName, setPersonName } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [inpEmail, setinpEmail] = useState("");
  const [inpPassword, setinpPassword] = useState("");
  const [toggleLoginSignup, settoggleLoginSignup] = useState(false);
  const [isSignUp, setSignUp] = useState(false);
  const [credentials, setCredentials] = useState([]);
  const [name, setName] = useState("");

  // console.log(isAuth, ">>>>>>>>>");
  console.log(personName, ">>>>>>>");

  const getEmailandPasswordData = async () => {
    const res = await fetch(`https://fusion-ltg2.onrender.com/logIn`);
    const data = await res.json();
    setCredentials(data);
  };

  useEffect(() => {
    getEmailandPasswordData();
  }, [toggleLoginSignup, name]);

  if (isAuth) {
    <Navigate to={"/"} />;
  }

  const myFunction = (val) => {
    setPersonName(val);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let count = 0;
    for (let i = 0; i < credentials.length; i++) {
      if (
        credentials[i].email === inpEmail &&
        credentials[i].password === inpPassword
      ) {
        console.log(credentials[i].name, "+++++");
        logIn();
        myFunction(credentials[i].name);
        setSignUp(true);
        alert(`Succesfully Logedin`);
        setinpEmail("");
        setinpPassword("");
        setName("");
        navigate("/");
        break;
      } else {
        if (count === credentials.length - 1) {
          alert("Invalid Credentials");
          setinpEmail("");
          setinpPassword("");
          setName("");
        }
        count++;
      }
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    await fetch(`https://fusion-ltg2.onrender.com/logIn`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: inpEmail,
        password: inpPassword,
        name: name,
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
            type="text"
            placeholder="name"
            value={name}
            color={"black"}
            onChange={(e) => setName(e.target.value)}
          />
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
