import React from "react";
import Header from "../Header";
import Search from "../Search";
import { Box, Text, VStack } from "@chakra-ui/react";

const BannerSection = () => {
  return (
    <React.Fragment>
      <Box
        bgImage="url('https://res.cloudinary.com/vasitum/image/upload/v1601306317/home/homepagebanner.svg')"
        bgPosition="center bottom"
        bgRepeat="no-repeat"
        bgSize="cover"
        height="700px"
      >
        <Header />
        <Box mt="60px" align="center">
          <VStack>
            <Text
              fontFamily="Poppins"
              fontSize="36px"
              letterSpacing="0.36px"
              color="#ffffff"
              fontWeight="500"
            >
              Land a job that you love
            </Text>
            <Text
              fontFamily="Roboto"
              fontSize="16px"
              color="#ffffff"
              mt="10px"
              opacity="0.7"
              fontWeight="500"
            >
              Use our AI-powered job search engine to find jobs that are meant
              for you.
            </Text>
            <Search />
          </VStack>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default BannerSection;
