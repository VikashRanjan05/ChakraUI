import React from "react";
import IcVasitumWorkmark from "../../../Static/Images/svg/IcVasitumWorkmark";
import IcVasitumLogotype from "../../../Static/Images/svg/IcVasitumLogotype";
import { Container, Text, Box, HStack, Button } from "@chakra-ui/react";
const Header = () => {
  return (
    <div>
      <Container
        maxW="1200px"
        H="70px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        pt="20px"
      >
        <HStack spacing={"10px"}>
          <Box width="37px">
            <IcVasitumWorkmark pathcolor="#fff" alt="Vasitum" width={"37px"} />
          </Box>
          <Box width="100px" ml="10px">
            <IcVasitumLogotype pathcolor="#fff" width={"80px"} />
          </Box>
        </HStack>
        <HStack spacing={"40px"}>
          <Text
            fontFamily="Roboto"
            fontSize="13px"
            lineHeight="1.36"
            letterSpacing="0.07"
            color="#fff"
            cursor="pointer"
          >
            Looking to hire?
          </Text>
          <Text
            fontFamily="Roboto"
            fontSize="13px"
            lineHeight="1.36"
            letterSpacing="0.07"
            color="#fff"
            cursor="pointer"
          >
            About us
          </Text>
          <HStack spacing={"20px"}>
            <Button
              w="112px"
              py="10px"
              borderRadius="5px"
              bg="#fff"
              boxShadow="0 6px 10px 2px rgba(0, 0, 0, 0.225)"
              fontFamily="Poppins"
              fontSize="12px"
              color="#7C8894"
              letterSpacing="0.07px"
              _focus={{
                outline: "none",
              }}
            >
              Login
            </Button>
            <Button
              w="112px"
              py="10px"
              borderRadius="5px"
              bg="#fff"
              boxShadow="0 6px 10px 2px rgba(0, 0, 0, 0.225)"
              fontFamily="Poppins"
              fontSize="12px"
              color="#7C8894"
              letterSpacing="0.07px"
              _focus={{
                outline: "none",
              }}
            >
              Free Signup
            </Button>
          </HStack>
        </HStack>
      </Container>
    </div>
  );
};

export default Header;
