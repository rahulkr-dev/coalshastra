import React from "react";
import { RiRedPacketLine } from "react-icons/ri";
import { HiDownload } from "react-icons/hi";
import { Box, Text, Flex, Image, Center } from "@chakra-ui/react";
let usaImg =
  "https://cdn.pixabay.com/photo/2017/03/14/21/00/american-flag-2144392_640.png";
const PriceDetails = () => {
  return (
    <Box p="10px" borderWidth={"1px"}>
      <Center p="5px" bg="blue.100">
        All Prices are Including CESS
      </Center>
      <Center p="5px" bg="red.100" color="red">
        Accepting terms, without any modification, of a "HOT listing" will lead
        to compulsory bid/offer acceptance
      </Center>
      <Box>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Text textTransform={"uppercase"}>MV samjohn sodidarity</Text>
          <Text fontSize={".9rem"} color="gray.500">
            Last Match
          </Text>
        </Flex>
        <Flex gap="1rem">
          <Box>
            <Flex gap="5px">
              <Image boxSize={"1rem"} src={usaImg} alt="Usa image" />
              <Text>United States</Text>
            </Flex>
            <Flex gap="5px">
              <RiRedPacketLine size="1rem" color="gray" />
              <Text>United States</Text>
            </Flex>
            <Text>6968 NAR {`NAR(Kcal/kg)`}</Text>
          </Box>
          <Text fontSize={"1.2rem"} color="blue">
            INR 14840.00 /MT
          </Text>
        </Flex>
      </Box>
      {/* Dowload icon */}
      <Flex>
        <HiDownload color="gray" />
        <Text textDecor={"underline"}>Download Report</Text>
      </Flex>

      {/* All Listing Items */}
      <Text fontWeight="bold" fontSize="1.2rem" mt="10px">All Listing</Text>

    </Box>
  );
};

export default PriceDetails;
