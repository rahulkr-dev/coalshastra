import React from "react";
import { Box } from "@chakra-ui/react";
import ContactCardItem from "./ContactCardItem";
let usaFlag =
  "https://cdn.pixabay.com/photo/2017/03/14/21/00/american-flag-2144392_640.png";
const contactCardData = [
  {
    title: "ioannis",
    country: {
      img: usaFlag,
      name: "united states",
    },
    address: "San Nicolas, abc contract, US COAL,Chandrapur",
    location: "Tuna Port",
    bldPrice: 0.0,
    floorPrice: "***",
    lastMatch: 0.0,
  },
  {
    title: "ioannis",
    country: {
      img: usaFlag,
      name: "united states",
    },
    address: "Test Vessel eAuction 6750 NAR",
    location: "Tuna Port",
    bldPrice: 0.0,
    floorPrice: "***",
    lastMatch: 0.0,
  },
  {
    title: "ioannis",
    country: {
      img: usaFlag,
      name: "united states",
    },
    address: "MV SAMJOHN SOLIDARITY",
    location: "Tuna Port",
    bldPrice: 0.0,
    floorPrice: 1400,
    lastMatch: 0.0,
  },
];
const ContactCard = () => {
  return (
    <Box
      overflowY={"scroll"}
      h="30rem"
      // border="1px solid black"
      //  w={{base:"90%",md:"30%"}}
    >
      {contactCardData.map((obj, _i) => (
        <ContactCardItem key={_i} data={obj} />
      ))}
    </Box>
  );
};

export default ContactCard;
