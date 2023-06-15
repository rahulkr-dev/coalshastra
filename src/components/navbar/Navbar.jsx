import React from "react";
import { Flex } from "@chakra-ui/react";
import NavbarLeft from "./NavbarLeft";
import NavbarRight from "./NavbarRight";
const Navbar = () => {
  return (
    <Flex  cursor={"pointer"}
     bg="#2959BA" 
    justifyContent={"space-around"} alignItems={"center"} color="white" py=".6rem">
      <NavbarLeft />
      <NavbarRight />
    </Flex>
  );
};

export default Navbar;
