import { Flex, Text, Center, Box } from "@chakra-ui/react";
import React from "react";

import { GrRefresh } from "react-icons/gr";
import { SiCoinmarketcap } from "react-icons/si";
import {BsStarFill} from "react-icons/bs";
import MarketTabItem from "./MarketTabItem";

const MarketTab = () => {
  const marketTabItemValue = [
    "fav",
    "usaguj",
    "wcl",
    "mcl",
    "vizagpt",
    "indoguj",
    "nmangpt",
    "usaun",
    "usam",
    "ecl",
    "ennkapt",
  ];
  return (
    <Box mt="1.5rem">
      {/* Ist box */}
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        w={{ base: "full", md: "85%" }}
        m="auto"
      >
        <Center fontWeight="bold" color="black" fontSize={"1.5rem"} gap="10px">
          <Text>Market Details</Text>
          <GrRefresh />
        </Center>
        <Center
          cursor={"pointer"}
          mr={{ base: "5px", md: "3rem" }}
          fontWeight={"bold"}
          p="5px 12px"
          borderRadius={"5px"}
          border="1px solid #2959BA"
          color="#2959BA"
          fontSize=".8rem"
          gap="5px"
        >
          <SiCoinmarketcap />
          <Text>Select Market</Text>
        </Center>
      </Flex>

      {/* Tab Item container */}
      <Flex gap="1rem" w={{base:"100%",md:"85%"}} m="auto" alignItems={"center"}>
        <Center>
            <BsStarFill />
        </Center>
        {marketTabItemValue.map((item, _i) => (
          <MarketTabItem key={_i} value={item} />
        ))}
      </Flex>
    </Box>
  );
};

export default MarketTab;
