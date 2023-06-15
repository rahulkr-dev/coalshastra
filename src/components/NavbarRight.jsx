import { Flex, Text, Center,Select } from "@chakra-ui/react";
import React from "react";

import { RiWallet2Line } from "react-icons/ri";
import { BsFillBellFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

const NavbarRight = () => {
  return (
    <Flex alignItems={"center"} gap="1rem" w="40%">
      <Center bg="rgba(100, 150, 200, 0.5)" boxShadow={"md"} borderRadius={"5px"} p="8px">
        <RiWallet2Line />
      </Center>
      <Center bg="rgba(100, 150, 200, 0.5)" boxShadow={"md"} borderRadius={"5px"} p="8px">
        <BsFillBellFill />
      </Center>
      <Center bg="rgba(100, 150, 200, 0.5)" boxShadow={"md"} borderRadius={"5px"} p="3px 15px">
        <Select fontWeight={"bold"} fontSize={".8rem"} placeholder="MYNTRA D.." variant={"unstyled"}>
          <option value="option1">Option 1</option>
        </Select>
      </Center>
      <Center bg="rgba(100, 150, 200, 0.5)" boxShadow={"md"} borderRadius={"5px"} p="3px 15px" gap="5px">
        <Center>
            <CgProfile />
        </Center>
        <Select fontWeight={"bold"}  fontSize={".9rem"} placeholder="Shalu" variant={"unstyled"}>
          <option value="option1">Option 1</option>
        </Select>
      </Center>
    </Flex>
  );
};

export default NavbarRight;
