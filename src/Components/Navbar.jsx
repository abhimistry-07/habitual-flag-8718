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
} from "@chakra-ui/react";

import style from "./Navbar.module.css";

import { SearchIcon } from "@chakra-ui/icons";

export default function Navbar() {
  return (
    <Box className={style.mainContainer}>
      <Box className={style.upperPortion}>
        <Box className={style.subupperPortion}>
          <Box className={style.navbar}>
            <Box>
              <Text className={style.logo}>fusion</Text>
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
                  <Tab fontSize={"myfontSize.sm"}>COURSES</Tab>
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
              <Text style={{ margin: "auto", marginRight: "50px" }}>
                LOG IN
              </Text>
              <Text style={{ margin: "auto" }}>JOIN FOR FREE</Text>
            </Box>
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
    </Box>
  );
}
