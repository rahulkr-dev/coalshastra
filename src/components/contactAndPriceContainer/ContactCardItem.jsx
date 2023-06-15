import React from "react";
import { Flex,Box,Text,Image,Grid } from "@chakra-ui/react";
import { RiRedPacketLine } from "react-icons/ri";
import { AiOutlineShareAlt } from "react-icons/ai";
import { HiDownload } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";

const ContactCardItem = ({ data }) => {
  const {
    title,
    country,
    location,
    quantity,
    address,
    bldPrice,
    floorPrice,
    lastMatch,
  } = data;
  return (
    <Grid p="1rem" py="1.5rem" boxShadow={"md"} gap=".7rem">
      <Flex pr="1rem" fontWeight={"bold"} justifyContent={"space-between"} alignItems={"center"}>
        <Text color={"purple.800"} textTransform={"uppercase"}>{title}</Text>
        <Flex alignItems={'center'} gap="1rem">
          <AiOutlineShareAlt size="1.3rem" color="gray" />
          <HiDownload size="1.3rem" color="blue" />
          <AiFillStar size="1.3rem" color="yellow" />
        </Flex>
      </Flex>
      <Flex textTransform={"capitalize"} gap=".5rem" alignItems={"center"} color="gray">
        <Flex gap=".5rem" alignItems={"center"}>
          <Image boxSize={"1rem"} src={country.img} />
          <Text>{country.name} | </Text>
        </Flex>
        <Text color="gray">{location} | </Text>
        <Text>{quantity} {` NAR(Kcal/kg)`}</Text>
      </Flex>
      {/* Address */}
      <Flex color="gray" alignItems={"center"} gap=".5rem">
        <RiRedPacketLine color="black" />
        <Text color="black" fontWeight="bold">{address}</Text>
      </Flex>
      {/* Price section */}
      <Flex color="gray" alignItems={"center"} justifyContent={"space-between"} pr="5rem">
        <Box >
          <Text fontSize={".8rem"}>Bld Price/MT</Text>
          <Text fontWeight={"500"} color={"gray.500"}>INR {bldPrice}</Text>
        </Box>
        <Box>
          <Text fontSize={".8rem"}>Floor Price/MT</Text>
          <Text fontWeight={"500"} color={"gray.500"}>INR {floorPrice}</Text>
        </Box>
        <Box>
          <Text fontSize={".8rem"}>Last Match</Text>
          <Text fontWeight={"500"} color={"gray.500"}>INR {lastMatch}</Text>
        </Box>
      </Flex>
    </Grid>
  );
};

export default ContactCardItem;
