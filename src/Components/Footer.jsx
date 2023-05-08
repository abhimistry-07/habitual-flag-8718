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
} from "@chakra-ui/react";

import style from "./Footer.module.css";

export default function Footer() {
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
        {children}
      </Text>
    );
  };
  
  return (
    <>
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
    </>
  );
}
