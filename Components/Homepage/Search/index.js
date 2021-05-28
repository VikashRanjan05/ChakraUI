import React from "react";
import { InputLeftElement, InputGroup, HStack, Input } from "@chakra-ui/react";

const Search = () => {
  return (
    <div>
      <HStack spacing={4}>
        <InputGroup>
          <InputLeftElement pointerEvents="none" />
          <Input type="tel" placeholder="Phone number" />
        </InputGroup>
        <InputGroup>
          <InputLeftElement pointerEvents="none" />
          <Input type="tel" placeholder="Phone number" />
        </InputGroup>
      </HStack>
    </div>
  );
};

export default Search;
