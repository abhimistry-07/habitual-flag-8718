import React, { Component } from "react";

import {
  Box,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  Input,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Image,
  Stack,
  Heading,
  Divider,
  ButtonGroup,
  VStack,
  Link,
  chakra,
  Container,
  VisuallyHidden,
  IconButton,
  useColorModeValue,
  useBreakpointValue,
  // Image,
} from "@chakra-ui/react";

import style from "./HomePage.module.css";

import { SearchIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import SearchFunctionality from "../Components/SearchFunctionality";
// import MyCarousel from "../Components/Slider";
// import AllRoutes from "../Routes/AllRoutes";
// import Slider from "react-slick";
// import SingleCoursePage from "../Pages/SingleCoursePage";

export default function HomePage() {
  const [topCategoriesData, settopCategoriesSection] = useState([]);

  const [recommendedCoursesData, setRecomendedCourseData] = useState([]);

  const [searchInput, setSearchInput] = useState("");

  // console.log(searchInput);

  // const recommendedCoursesSection = async () => {
  //   const response = await fetch("https://fusion-ltg2.onrender.com/courses");
  //   const data = await response.json();
  //   setRecomendedCourseData(data);
  // };

  const topCategoriesSection = async () => {
    const response = await fetch("https://fusion-ltg2.onrender.com/topCatData");
    const data = await response.json();
    settopCategoriesSection(data);
    return data.meals;
  };

  useEffect(() => {
    topCategoriesSection();
    // recommendedCoursesSection();
  }, []);

  return (
    <Box className={style.mainContainer}>
      <Box className={style.upperPortion}>
        <Box className={style.subupperPortion}>
          <Box>
            <Navbar />
            {/* <AllRoutes /> */}
          </Box>
          <Box className={style.searchBarSection}>
            <Text className={style.searchBarText}>
              Learn on your
              <Text>schedule</Text>
            </Text>
            <Box style={{ textAlign: "left", marginTop: "50px" }}>
              <Input
                // size="lg"
                height={"66px"}
                placeholder="What do you want to learn?"
                width={"450px"}
                color={"black"}
                bg={"white"}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <Button
                colorScheme="green"
                style={{ height: "65px", marginLeft: "10px" }}
              >
                <SearchIcon />
                Search
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      {searchInput === "" ? (
        ""
      ) : (
        <Box style={{ width: "74%", margin: "auto" }}>
          <SearchFunctionality searchInput={searchInput} />
        </Box>
      )}
      <Box className={style.worldWideDetails}>
        <SimpleGrid columns={4} spacing={10}>
          <Card>
            <Text className={style.text1}>COURSE CREATE</Text>
            <Text className={style.text2}>25.000+</Text>
          </Card>
          <Card>
            <Text className={style.text1}>STUDENTS ENROLLED</Text>
            <Text className={style.text2}>15.3 Million+</Text>
          </Card>
          <Card>
            <Text className={style.text1}>COUNTRIES USING US</Text>
            <Text className={style.text2}>120 Countries</Text>
          </Card>
          <Card>
            <Text className={style.text1}>EARNED FROM US</Text>
            <Text className={style.text2}>$100 Million+</Text>
          </Card>
        </SimpleGrid>
      </Box>
      <Box className={style.recommendedCourseSection}>
        <Text className={style.text3} textAlign={"left"}>
          Recommended
          <Text>Courses</Text>
        </Text>
        {/* <SimpleGrid columns={3}>
          {recommendedCoursesData.map((item) => {
            return (
              <Card key={item.id}>
                <CardBody>
                  <Image src={item.image} borderRadius="lg" margin={"auto"} />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{item.title}</Heading>
                    <Text>{item.instructor}</Text>
                    <Text color="blue.600" fontSize="2xl">
                      {item.duration}{" "}
                    </Text>
                    <Text>{item.view}</Text>
                  </Stack>
                  <Text
                    fontSize={"md"}
                    color="green.400"
                    as={"b"}
                    onClick={() => handleSinglePage(item.id)}
                  >
                    More Details...
                  </Text>
                </CardBody>
              </Card>
            );
          })}
        </SimpleGrid> */}
        {/* <Box>
          <MyCarousel recommendedCoursesData={recommendedCoursesData} />
        </Box> */}

        <SimpleGrid columns={3} gap={6}>
          <Card maxW="sm">
            <CardBody>
              <Image
                margin={"auto"}
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/41/3b25f3874445ab9d6831dbd39d95a3/LowRes-Original-168621112.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=600&h=216&q=50&fit=fill"
                // alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Cybersecurity Framework</Heading>
                <Text>Bill Weinman</Text>
                <Text color="blue.600" fontSize="2xl">
                  3 months
                </Text>
                <Text>72,632 View</Text>
              </Stack>
            </CardBody>
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/b8/7caade153743ebaf1309aee6cf07c6/AIforBusiness_fundamentals_coursera.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=600&h=216&fit=fill&q=50"
                // alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">AI Fundamentals</Heading>
                <Text>Dan Boneh</Text>
                <Text color="blue.600" fontSize="2xl">
                  3 Months
                </Text>
                <Text>1,489,310 View</Text>
              </Stack>
            </CardBody>
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/e8/988c2c9364474399749b5c391be93a/1200x600_certsResize_3.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=600&h=216&fit=fill&q=50"
                // alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Build Wireframes</Heading>
                <Text>Bill Weinman</Text>
                <Text color="blue.600" fontSize="2xl">
                  2h 11min
                </Text>
                <Text>1,489,310 View</Text>
              </Stack>
            </CardBody>
          </Card>
        </SimpleGrid>
      </Box>
      <Box className={style.topCategoriesSection}>
        <Text className={style.text3} textAlign={"left"}>
          Top
          <Text>Categories</Text>
        </Text>
        <SimpleGrid columns={4} gap={4}>
          {topCategoriesData.map((item) => {
            return (
              <Card padding={10}>
                <VStack>
                  <Image src={item.image} style={{ width: "50px" }} />
                  <Text
                    style={{
                      color: "#765AB1FF",
                      fontSize: "16px",
                      fontWeight: "bolder",
                    }}
                  >
                    {item.title}
                  </Text>
                </VStack>
              </Card>
            );
          })}
        </SimpleGrid>
      </Box>
      <Box className={style.midVideoPart}>
        <SimpleGrid columns={2}>
          <Image
            style={{ height: "664px" }}
            src="https://img.freepik.com/free-photo/close-up-image-programer-working-his-desk-office_1098-18707.jpg?w=740&t=st=1683536623~exp=1683537223~hmac=1c762a4c966737f560636338e349df5c34ea21d4c8e2fbc885bdb3fb9ae5df12"
          />
          <Box style={{ backgroundColor: "#765AB1FF" }}>
            <Box style={{ padding: "155px", textAlign: "left" }}>
              <Text className={style.text1}>SUCCESS</Text>
              <br />
              <br />
              <Text style={{ fontSize: "42px", lineBreak: "auto" }}>
                Photos & Lights <br />
                Essentials
              </Text>
              <br />
              {/* <br /> */}
              <Text>
                Lorem ipsum dolor sit amet, consectetur <br />
                adipisicing elit,sed do eiusmod tempor Best <br /> incididunt ut
                labore et aliqua.
              </Text>
              <br />
              <br />
              <Button
                height="64px"
                width="180px"
                bg={"#1AC843FF"}
                padding={"30px"}
                fontSize={"14px"}
                borderRadius={"0px"}
              >
                LEARN MORE
              </Button>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
      <Box className={style.newCourseSection} marginTop={100}>
        <Text className={style.text3} textAlign={"left"}>
          New <br /> Courses
        </Text>
        <SimpleGrid columns={3} gap={6}>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://img.freepik.com/premium-vector/set-mockups-smartphones-with-user-interface-mobile-application_451939-184.jpg?w=740"
                // alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">UI & UX Design Training</Heading>
                <Text>Bill Weinman</Text>
                <Text color="blue.600" fontSize="2xl">
                  2h 11min
                </Text>
                <Text>1,489,310 View</Text>
              </Stack>
            </CardBody>
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://img.freepik.com/free-photo/ai-nuclear-energy-background-future-innovation-disruptive-technology_53876-129783.jpg?size=626&ext=jpg&ga=GA1.2.192555866.1683199645&semt=ais"
                // alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">AI</Heading>
                <Text>Tim Weinman</Text>
                <Text color="blue.600" fontSize="2xl">
                  5 months
                </Text>
                <Text>2,589,000 View</Text>
              </Stack>
            </CardBody>
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://img.freepik.com/premium-photo/various-computer-equipment-with-programming-code-screens-table-dark-room-cyber-security-concept-copy-space_236854-23136.jpg?size=626&ext=jpg&ga=GA1.1.192555866.1683199645&semt=ais"
                // alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Back end developer</Heading>
                <Text>Tom thomson</Text>
                <Text color="blue.600" fontSize="2xl">
                  7 months
                </Text>
                <Text>1,954,310 View</Text>
              </Stack>
            </CardBody>
          </Card>
        </SimpleGrid>
      </Box>
      <Box className={style.footer}>
        <Footer />
      </Box>
    </Box>
  );
}
