import { Grid } from "@chakra-ui/react";
import React from "react";
import Contact from "./Contact";
import PriceDetails from "./PriceDetails";

const ContactAndPriceContainer = () => {
  return (
    <Grid
    // bg="blue"
    // bg="blue"
    // mt="5rem"
    pt="3rem"
      templateColumns={{ base: "repeat(1,1fr)", md: "40% 60%" }}
      w={{ base: "90%", md: "90%" }}
      m="auto"
    >
      <Contact />
      <PriceDetails />
    </Grid>
  );
};

export default ContactAndPriceContainer;
