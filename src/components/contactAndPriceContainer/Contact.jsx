import { Box, Text, Flex } from "@chakra-ui/react";
import React from "react";
import ContactCard from "./ContactCard";

const Contact = () => {
  return (
    <Box borderWidth={"1px"} p="1rem 5px">
      <Text pl="2rem" fontWeight="bold" color="gray">
        USA-GUGRAT{" "}
        <Text fontSize=".9rem" fontWeight={"normal"} as="span">
          market
        </Text>
      </Text>
      {/* Contact Card */}
      <ContactCard />
    
    </Box>
  );
};

export default Contact;
