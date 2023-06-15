import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Box } from '@chakra-ui/react'
import MarketTab from '../components/marketTab/MarketTab'
const HomePage = () => {
  return (
    <Box>
        <Navbar />
        <MarketTab />
    </Box>
  )
}

export default HomePage