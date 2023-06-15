import React from "react";
import Filter from "./Filter";
import Search from "./Search";
import { Flex } from "@chakra-ui/react";

const SerarchFilterContainer = () => {
  return (
    <Flex
        // border={"1px solid black"}
        // mt="2rem"
        pt="2rem"
      alignItems={"center"}
      justifyContent={"space-between"}
      w={{ base: "100%", md: "85%" }}
      m="auto"
    >
      <Filter />
      <Search />
    </Flex>
  );
};

export default SerarchFilterContainer;
