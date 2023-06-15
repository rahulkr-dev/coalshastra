import { Box, Flex, FormLabel, Input, Select,Center } from "@chakra-ui/react";
import React from "react";

const Filter = () => {
  return (
    <Flex color="gray" gap="1rem" fontSize=".8rem">
      <Box>
        <FormLabel fontSize={".7rem"}>Currency</FormLabel>
        <Select placeholder="INR">
          <option value="">USD</option>
          <option value="">EUR</option>
          <option value="">BTC</option>
        </Select>
      </Box>

      <Box>
      <FormLabel fontSize={".7rem"}>Payment Mehods</FormLabel>
      <Select placeholder="Payment Methods">
        <option value="">Debit Card</option>
        <option value="">Credit Card</option>
        <option value="">UPI</option>
      </Select>
    </Box>
    <Box>
      <FormLabel fontSize={".7rem"}>Lifting days</FormLabel>
      <Input placeholder="Lifting Days" />

    </Box>
    <Center fontWeight={"bold"} py="2rem" color="#2959BA">
        Clear All
    </Center>

    </Flex>
  );
};

export default Filter;
