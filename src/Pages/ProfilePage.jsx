import React, { useContext } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
  Button,
  Box,
  Text,
  Card,
  Avatar,
  HStack,
} from "@chakra-ui/react";
import { AuthContext } from "../Context/AuthContextProvider";

export default function Profile() {
  const { personName } = useContext(AuthContext);

  // console.log(personName, ">>>>>>>");
  return (
    <Box style={{ height:"800px"}}>
      <Card maxW="md" variant="filled" m={"auto"} textAlign={"center"}>
        <HStack>
          <Avatar size="2xl" />
          <Text fontSize={20} style={{ color: "black" }}>
            {" "}
            Welcome {personName}
          </Text>
        </HStack>
      </Card>
    </Box>
  );
}
