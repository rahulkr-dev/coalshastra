import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Box,Flex } from "@chakra-ui/react";
import MarketTab from "../components/marketTab/MarketTab";
import SerarchFilterContainer from "../components/searchFilterContainer/SerarchFilterContainer";
import ContactAndPriceContainer from "./../components/contactAndPriceContainer/ContactAndPriceContainer";
import BuyerAndSellerForm from "../components/buyerAndSellerForm/BuyerAndSellerForm";
const HomePage = () => {
  return (
    <Box>
      <Navbar />
      <MarketTab />
      <SerarchFilterContainer />
      <ContactAndPriceContainer />
      <Flex pr={{base:"10px",md:"5%"}} justifyContent={"flex-end"} >
        <BuyerAndSellerForm />
      </Flex>
    </Box>
  );
};

export default HomePage;
