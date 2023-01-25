import React from "react";
import { Flex, Img, Text } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Flex p="20px" w="100%" justify="space-between" align="center">
      <div>
        <Img src="" alt="" />
      </div>
      <Flex>Logo</Flex>
      <Flex>Fazer login</Flex>
    </Flex>
  );
};
