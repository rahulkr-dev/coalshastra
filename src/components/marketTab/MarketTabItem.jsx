import React from "react";
import { Text } from "@chakra-ui/react";
const MarketTabItem = ({ value }) => {
  return (
    <Text
      p="1rem"
      cursor={"pointer"}
      borderBottom={value == "usaguj" ? "3px solid #2959BA" : "none"}
      textTransform={"uppercase"}
      color="gray"
      fontWeight={"bold"}
    >
      {value}
    </Text>
  );
};

export default MarketTabItem;
