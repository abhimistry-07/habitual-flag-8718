import {
  Box,
  Heading,
  Image,
  Text,
  Card,
  Button,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Center,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { CheckIcon } from "@chakra-ui/icons";
import Footer from "../Components/Footer";
import { Spinner2 } from "../Components/Spinner";

export default function SingleCoursePage() {
  const [loading, setLoading] = useState(false);
  const { user_id } = useParams();
  const [data, setData] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  let showprice = 1;
  let showtitle = "";

  const getData = async () => {
    setLoading(true);
    const res = await fetch(`http://localhost:8080/courses?id=${user_id}`);
    const data = await res.json();
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box>
      <Box
        className="navbarSection"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=829&q=80)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
        }}
      >
        <Box style={{ width: "74%", margin: "auto" }}>
          <Navbar />
        </Box>
      </Box>
      {loading ? (
        <Box style={{ margin: "auto" }}>
          <Box style={{ margin: "auto" }}>
            <Spinner2 />
          </Box>
          <Text fontSize={40} color={"black"} style={{ margin: "auto" }}>
            ...Loading
          </Text>
        </Box>
      ) : (
        <Box className="Course">
          {data.map((item) => {
            const {
              id,
              image,
              title,
              instructor,
              duration,
              view,
              description,
              price,
            } = item;

            showtitle = title;
            showprice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

            // setTitle(title);
            return (
              <Box key={id}>
                <Card style={{ width: "80%", margin: "auto", padding: "50px" }}>
                  <Stack spacing={4}>
                    <Box style={{ textAlign: "center", margin: "auto" }}>
                      <Image
                        src={image}
                        style={{
                          margin: "auto",
                          marginBottom: "50px",
                          width: "400px",
                        }}
                      />
                    </Box>
                    <Heading>{title}</Heading>
                    <Text fontSize="xl" color="#765AB1FF">
                      <Text as={"B"}>Instructor:- </Text> {instructor}
                    </Text>
                    <Text fontSize="xl" color="#765AB1FF">
                      <Text as={"B"}>Course Duration:- </Text>
                      {duration}
                    </Text>
                    <Text fontSize="xl" color="#765AB1FF">
                      <Text as={"B"}> Views:- </Text>
                      {view} views
                    </Text>
                    <Text fontSize="xl" color="#765AB1FF">
                      <Text as={"B"}> Price:- </Text>₹{price}
                    </Text>
                    <Text fontSize="xl" color="#765AB1FF">
                      <Text as={"B"}> About:- </Text>
                      {description}
                    </Text>
                    <Button
                      colorScheme="green"
                      variant="outline"
                      style={{ marginTop: "50px" }}
                      onClick={onOpen}
                    >
                      Buy this course
                    </Button>
                  </Stack>
                </Card>
              </Box>
            );
          })}
        </Box>
      )}
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader style={{ backgroundColor: "#a435f0" }}>
            {showtitle}
          </ModalHeader>
          {/* <ModalCloseButton /> */}
          <ModalBody style={{ color: "#765AB1FF" }}>
            <Center py={6}>
              <Box
                maxW={"330px"}
                w={"full"}
                bg={useColorModeValue("white", "gray.800")}
                boxShadow={"2xl"}
                rounded={"md"}
                overflow={"hidden"}
              >
                <Stack
                  textAlign={"center"}
                  p={6}
                  // color={useColorModeValue("gray.800", "white")}
                  align={"center"}
                >
                  <Stack direction={"row"} align={"center"} justify={"center"}>
                    <Text fontSize={"3xl"}>₹</Text>
                    <Text fontSize={"6xl"} fontWeight={800}>
                      {showprice}
                    </Text>
                  </Stack>
                </Stack>
                <Box
                  bg={useColorModeValue("gray.50", "gray.900")}
                  px={6}
                  py={10}
                >
                  <List spacing={3}>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.400" />
                      Get Communication Skill Course Free
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.400" />
                      Raise Discussion
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.400" />
                      Get Free Projects
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.400" />
                      All features
                    </ListItem>
                  </List>
                  <Button
                    mt={10}
                    w={"full"}
                    bg={"green.400"}
                    color={"white"}
                    rounded={"xl"}
                    boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
                    _hover={{
                      bg: "green.500",
                    }}
                    _focus={{
                      bg: "green.500",
                    }}
                  >
                    Make Payment
                  </Button>
                </Box>
              </Box>
            </Center>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box className={"footer"}>
        <Footer />
      </Box>
    </Box>
  );
}
