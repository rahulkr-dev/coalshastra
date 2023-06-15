import React from "react";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <InputGroup w={{base:"100%",md:"16rem"}} fontWeight={"bold"}>
      <InputLeftElement pointerEvents="none">
        <AiOutlineSearch size={"1.3rem"} color="gray" />
      </InputLeftElement>
      <Input fontSize={".9rem"}  type="search" placeholder="Search By Vessel, Type etc." />
    </InputGroup>
  );
};

export default Search;
