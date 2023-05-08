import React, { useContext, useState } from "react";
import {
  Box,
  Text,
  Tabs,
  TabList,
  Tab,
  TabIndicator,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Avatar,
  HStack,
  useDisclosure,
} from "@chakra-ui/react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContextProvider";

export default function Navbar() {
  const { isAuth, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const NavigateToCourses = () => {
    navigate("/courses");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogOut = () => {
    logOut();
  };

  return (
    <Box className={style.navbar}>
      <Box>
        <Text className={style.logo}>
          <Link to={"/"}>fusion</Link>
        </Text>
      </Box>
      <Box
        style={{
          marginTop: "40px",
          marginLeft: "66px",
        }}
      >
        <Tabs
          position="relative"
          variant="unstyled"
          style={{ fontSize: "12px" }}
        >
          <TabList>
            <Tab fontSize={"myfontSize.sm"} onClick={NavigateToCourses}>
              <Link to={"/courses"}>COURSES</Link>
            </Tab>
            <Tab fontSize={"myfontSize.sm"}>TUTORIALS</Tab>
            <Tab fontSize={"myfontSize.sm"}>FEATURES</Tab>
            <Tab fontSize={"myfontSize.sm"}>PRICING</Tab>
            <Tab fontSize={"myfontSize.sm"}>ABOUT</Tab>
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="2px"
            bg="blue.500"
            borderRadius="1px"
          />
        </Tabs>
      </Box>
      <Box
        style={{
          display: "flex",
          marginTop: "40px",
          marginRight: "20px",
        }}
      >
        <Text
          style={{ margin: "auto", marginRight: "50px" }}
          className="logInText"
        >
          {isAuth ? (
            <Popover>
              <PopoverTrigger>
                <Text>Profile</Text>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody style={{ backgroundColor: "rgb(121, 87, 192)" }}>
                  <HStack>
                    <Avatar size="xs" src="https://bit.ly/broken-link" />
                    <Link style={{ fontSize: "20px" }} to={"/profile"}>
                      Profile
                    </Link>
                  </HStack>
                  <Button
                    colorScheme="green"
                    onClick={handleLogOut}
                    style={{ border: "0px", marginTop: "10px" }}
                  >
                    Logout
                  </Button>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          ) : (
            <Text onClick={handleLogin}>Login</Text>
          )}
        </Text>
        <Text style={{ margin: "auto" }}>JOIN FOR FREE</Text>
      </Box>
    </Box>
  );
}
