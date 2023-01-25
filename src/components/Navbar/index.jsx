import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export const Navbar = () => {
  const links = [
    "Tecnologia",
    "Linguagens",
    "Novidades",
    "Cursos",
    "Sobre nós",
  ];

  return (
    <Flex
      gap="70px"
      justify="center"
      w="100%"
      bgColor="rgba(0,0,0,0.8)"
      p="15px"
    >
      {links.map((link) => (
        <Text
          p="10px"
          borderRadius="5px"
          color="#fff"
          transition="all 1s ease"
          _hover={{
            transform: "scale(1.1)",
            backgroundColor: "#fff",
            borderRadius: "5px",
            color: "#000",
          }}
          cursor="pointer"
          as="h1"
        >
          {link}
        </Text>
      ))}
    </Flex>
  );
};
