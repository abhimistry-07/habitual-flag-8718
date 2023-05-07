import React from "react";
import { Box, Text, Tabs, TabList, Tab, TabIndicator } from "@chakra-ui/react";
// import { style } from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

export default function Navbar() {
  const navigate = useNavigate();

  const NavigateToCourses = () => {
    navigate("/courses");
  };

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Text
          style={{
            fontFamily: "Epilogue",
            fontSize: "35px",
            marginTop: "30px",
          }}
        >
          fusion
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
              {/* COURSES */}
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
          {/* <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels> */}
        </Tabs>
      </Box>
      <Box
        style={{
          display: "flex",
          marginTop: "40px",
          marginRight: "20px",
        }}
      >
        <Text style={{ margin: "auto", marginRight: "50px" }}>LOG IN</Text>
        <Text style={{ margin: "auto" }}>JOIN FOR FREE</Text>
      </Box>
    </Box>
  );
}
