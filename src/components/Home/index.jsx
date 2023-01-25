import { Flex, Text, Image } from "@chakra-ui/react";
import { Button } from "../Button";
import robot from "../../assets/images/robot.jpg";
import React from "react";
import { Notices } from "../Notices";

export const Home = () => {
  return (
    <>
      <Flex
        objectFit="cover"
        flexDir="column"
        backgroundPosition="center"
        backgroundSize="cover"
        bgImg={robot}
        w="100%"
        h="100%"
        p="20px"
      >
        <Flex flexDir="column" gap="30px">
          <Text w="60%" color="#fff" fontSize="2.5rem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima illo
            eos ea eaque, explicabo nemo enim laudantium dicta ad! Facilis est
            iusto reprehenderit! Nulla dolore praesentium tempore, magnam
            numquam quidem.
          </Text>
          <Button w="50%" colorScheme="whiteAlpha" variant="solid">
            Ver notícia
          </Button>
        </Flex>
      </Flex>
      <Flex gap="50px" justify="center">
        <Button variant="ghost" mt="10px">
          Mais populares
        </Button>
        <Button variant="ghost" mt="10px">
          Mais comentados
        </Button>{" "}
        <Button variant="ghost" mt="10px">
          Mais visitados
        </Button>
      </Flex>
      <Flex>
        <Notices />
      </Flex>
    </>
  );
};
