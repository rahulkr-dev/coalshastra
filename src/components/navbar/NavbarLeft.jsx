import { Center, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const NavbarLeft = () => {
  return (
    <Flex alignItems={"center"} gap="2rem" w="60%" fontSize={".9rem"}>
      <Image
        ml="5rem"
        w="140px"
        h="28px"
        src="https://coalshastra.com/images/coalshastra-logo-white.png"
        alt="Logo"
      />
      <Text>Home</Text>
      <Flex pos="relative">
        <Text>My Listing</Text>
        <Center
          boxSize={"1rem"}
          pos="absolute"
          top="-30%"
          right="-20%"
          bg="red"
          borderRadius={"full"}
        >
          5
        </Center>
      </Flex>
      <Text
        fontWeight={"bold"}
        color="#2959BA"
        borderRadius={"2px"}
        bg="white"
        p="3px 8px"
      >
        Markets
      </Text>
      <Flex pos="relative">
        <Text>Inbox</Text>
        <Center
          boxSize={"1rem"}
          pos="absolute"
          top="-30%"
          right="-20%"
          bg="red"
          borderRadius={"full"}
        >
          2
        </Center>
      </Flex>
      <Flex pos="relative">
        <Text>My Listing</Text>
        <Center px="2px" pos="absolute" top="-50%" right="-50%" bg="red" borderRadius={"30%"}>
          new
        </Center>
      </Flex>
    </Flex>
  );
};

export default NavbarLeft;
