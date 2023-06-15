import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Box } from "@chakra-ui/react";
import MarketTab from "../components/marketTab/MarketTab";
import SerarchFilterContainer from "../components/searchFilterContainer/SerarchFilterContainer";
import ContactAndPriceContainer from "./../components/contactAndPriceContainer/ContactAndPriceContainer";
const HomePage = () => {
  return (
    <Box>
      <Navbar />
      <MarketTab />
      <SerarchFilterContainer />
      <ContactAndPriceContainer />
    </Box>
  );
};

export default HomePage;
