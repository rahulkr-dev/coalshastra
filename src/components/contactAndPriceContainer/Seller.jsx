import React from "react";
import { Box, Grid, Text, Center, Flex } from "@chakra-ui/react";
import { FiGift } from "react-icons/fi";
import { AiFillExperiment } from "react-icons/ai";
import { FaMoneyCheck } from "react-icons/fa";
import StartCollection from "./StartCollection";

const Seller = ({ views, liftingDay, advance, rating, bottomInfo,mt,price }) => {
  return (
    <Box>
      <Text>
        #{views} {`| (Views) `}
      </Text>
      <Flex>
        <Text fontWeight={"bold"} color="red">
          {price}
        </Text>
        <Flex>
          <FaMoneyCheck color="gray" />
          <Text>{mt}</Text>
        </Flex>
      </Flex>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Text>{advance}</Text>
        <Text>{liftingDay}</Text>
      </Flex>
      <Flex>
        <FiGift color="gray" />
        <Text>MV SAMJOHN SOLIDARITY</Text>
      </Flex>
      <Flex>
        <AiFillExperiment />
        <Text>Seller Info</Text>
      </Flex>
      {/* Import start component */}
      <StartCollection rating={rating} />
      <Text>{bottomInfo}</Text>
    </Box>
  );
};

export default Seller;
