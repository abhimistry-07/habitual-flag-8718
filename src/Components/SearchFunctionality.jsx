import { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Image,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function SearchFunctionality({ searchInput }) {
  const [data, setData] = useState("");

  const fetchAndRenderData = async () => {
    // setLoading(true);
    const res = await fetch(`http://localhost:8080/courses?q=${searchInput}`);
    const resdata = await res.json();
    setData(resdata);
    // setLoading(false);
  };
  //   console.log(data, "data");

//   const handleSinglePage = (id) => {};

  useEffect(() => {
    fetchAndRenderData();
  }, [searchInput]);

  return (
    <>
      {data.length > 0 ? (
        <SimpleGrid columns={3} gap={5}>
          {data?.map((item) => {
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
                  <Text fontSize={"md"} color="green.400" as={"b"}>
                    <Link to={`/courses/${item.id}`}>More Details...</Link>
                  </Text>
                </CardBody>
              </Card>
            );
          })}
        </SimpleGrid>
      ) : (
        <Box>{searchInput !== "" ? <Text>No results found</Text> : ""};</Box>
      )}
    </>
  );
}
