import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import style from "./CoursesPage.module.css";
import {
  CardBody,
  Text,
  Card,
  SimpleGrid,
  Image,
  Stack,
  Heading,
} from "@chakra-ui/react";

export default function CoursesPage() {
  const [data, setData] = useState([]);

  const AllCourses = async () => {
    const response = await fetch("http://localhost:8080/courses");
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    AllCourses();
  }, []);

  return (
    <div>
      <div
        className="navbarSection"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=829&q=80)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
        }}
      >
        <div style={{ width: "74%", margin: "auto" }}>
          <Navbar />
        </div>
      </div>
      <div className={style.CoursesContainer}>
        <div className={style.innerContainer}>
          <div style={{padding:"30px"}}>
            <SimpleGrid columns={2} spacing={4}>
              {data.map((item) => {
                return (
                  <Card key={item.id} className={style.card}>
                    <CardBody>
                      <Image
                        src={item.image}
                        borderRadius="lg"
                        margin={"auto"}
                      />
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
                        //   onClick={() => handleSinglePage(item.id)}
                      >
                        More Details...
                      </Text>
                    </CardBody>
                  </Card>
                );
              })}
            </SimpleGrid>
          </div>
        </div>
      </div>
    </div>
  );
}
