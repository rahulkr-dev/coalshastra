import React from "react";
import { Box, Grid, Text, Center, Flex } from "@chakra-ui/react";
import { FiGift } from "react-icons/fi";
import { AiFillExperiment } from "react-icons/ai";
import { FaMoneyCheck } from "react-icons/fa";
import StartCollection from "./StartCollection";

const Buyer = ({
  mt,
  price,
  views,
  liftingDay,
  creditDay,
  rating,
  bottomInfo,
}) => {
  return (
    <Box>
      <Text>
        #{views} {`| (Views) `}
      </Text>
      <Flex>
        <Flex>
          <FaMoneyCheck color="gray" />
          <Text>{mt}</Text>
        </Flex>
        <Text fontWeight={"bold"} color="green">
          {price}
        </Text>
      </Flex>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Text>{liftingDay}</Text>
        <Text>{creditDay}</Text>
      </Flex>
      <Flex>
        <FiGift color="gray" />
        <Text>MV SAMJOHN SOLIDARITY</Text>
      </Flex>
      <Flex>
        <AiFillExperiment />
        <Text>Buyer Info</Text>
      </Flex>
      {/* Import start component */}
      <StartCollection rating={rating} />
      <Text>{bottomInfo}</Text>
    </Box>
  );
};

export default Buyer;
