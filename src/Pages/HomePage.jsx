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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleCoursePage from "../Pages/SingleCoursePage";
import Navbar from "../Components/Navbar";
import AllRoutes from "../Routes/AllRoutes";

export default function HomePage() {
  const [topCategoriesData, settopCategoriesSection] = useState([]);

  const [recommendedCoursesData, setRecomendedCourseData] = useState([]);

  const recommendedCoursesSection = async () => {
    const response = await fetch("http://localhost:8080/courses");
    const data = await response.json();
    setRecomendedCourseData(data);
  };

  const topCategoriesSection = async () => {
    const response = await fetch("http://localhost:8080/topCatData");
    const data = await response.json();
    settopCategoriesSection(data);
    return data.meals;
  };

  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
        {children}
      </Text>
    );
  };

  // class MySlider extends Component {
  //   render() {
  //     const settings = {
  //       className: "center",
  //       infinite: true,
  //       centerPadding: "60px",
  //       slidesToShow: 3,
  //       swipeToSlide: false,
  //       afterChange: function (index) {
  //         console.log(
  //           `Slider Changed to: ${
  //             index + 1
  //           },  background: #222; color: #bada55 `
  //         );
  //       },
  //     };
  //     return (
  //       <Box>
  //         <Slider {...settings}>
  //           {recommendedCoursesData.map((item) => {
  //             return (
  //               <Card key={item.id} bg={"red.400"}>
  //                 <CardBody>
  //                   <Image src={item.image} borderRadius="lg" margin={"auto"} />
  //                   <Stack mt="6" spacing="3">
  //                     <Heading size="md">{item.title}</Heading>
  //                     <Text>{item.instructor}</Text>
  //                     <Text color="blue.600" fontSize="2xl">
  //                       {item.duration}{" "}
  //                     </Text>
  //                     <Text>{item.view}</Text>
  //                   </Stack>
  //                 </CardBody>
  //               </Card>
  //             );
  //           })}
  //         </Slider>
  //       </Box>
  //     );
  //   }
  // }

  const handleSinglePage = (id) => {
    <SingleCoursePage id={id} />;
  };

  useEffect(() => {
    topCategoriesSection();
    recommendedCoursesSection();
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
        <SimpleGrid columns={3}>
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
        </SimpleGrid>
        {/* <Box>
          <MySlider />
        </Box> */}
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
          <Image src="https://app.visily.ai/projects/b9c1d17e-9922-4dc8-be73-5b0359ab46a3/boards/473708/elements/161325609" />
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
        <SimpleGrid columns={3}>
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
        </SimpleGrid>
      </Box>
      <Box className={style.footer}>
        <Box className={style.upperFooter}>
          <Container as={Stack} maxW={"6xl"} py={10}>
            <SimpleGrid
              templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
              spacing={8}
            >
              <Stack spacing={6}>
                <Text fontSize={"40px"} fontWeight={"bolder"}>
                  fusion
                </Text>
              </Stack>
              <Stack align={"flex-start"}>
                <ListHeader>Company</ListHeader>
                <Link href={"#"}>About us</Link>
                <Link href={"#"}>Careers</Link>
                <Link href={"#"}>Press</Link>
                <Link href={"#"}>Blog</Link>
                <Link href={"#"}>AffiLiates</Link>
              </Stack>
              <Stack align={"flex-start"}>
                <ListHeader>Teaching</ListHeader>
                <Link href={"#"}>Become a Teacher</Link>
                <Link href={"#"}>Teaching Academy</Link>
                <Link href={"#"}>Teacher Handbook</Link>
                <Link href={"#"}>Partnerships</Link>
              </Stack>
              <Stack align={"flex-start"}>
                <ListHeader>SUBSCRIBE TO NEWSLETTER</ListHeader>
                <Stack direction={"row"}>
                  <Input
                    className={style.ematlInput}
                    placeholder={"Enter your email"}
                  />
                  <Button
                    className={style.ematlInputBtn}
                    style={{ width: "200px", backgroundColor: "#1F2437FF" }}
                  >
                    Subscribe
                  </Button>
                </Stack>
              </Stack>
            </SimpleGrid>
          </Container>
        </Box>
        <Box className={style.lowerFooter}>
          <br />
          <Text className={style.footerText} textAlign={"left"}>
            2019 All Right Researved by Fusion Lab
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
