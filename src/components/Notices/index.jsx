import { Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import robothand from "../../assets/images/robothand.jpg";
import robot2 from "../../assets/images/robot2.jpg";
import robots from "../../assets/images/robots.jpg";

export const Notices = () => {
  return (
    <Flex gap="50px" m="20px auto" w="75%" h="600px">
      <Flex flex="2" flexDir="column">
        <Image
          transition="all 1s ease-in-out"
          _hover={{ transform: "scale(1.05)" }}
          objectFit="cover"
          backgroundRepeat="no-repeat"
          src={robothand}
        />
        <Text m="20px 0 20px 0" color="#000" fontSize="18px">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          consectetur aliquid quod unde dignissimos qui ea quo. Ea, officiis
          aliquid, inventore aspernatur ut, adipisci similique laudantium hic
          dolores cumque unde!
        </Text>
      </Flex>
      <Flex flexDir="column" flex="1">
        <Flex flexDir="column">
          <Image
            transition="all 1s ease-in-out"
            cursor="pointer"
            _hover={{ transform: "scale(1.05)" }}
            src={robot2}
            alt="robot2"
          />
          <Text m="10px 0 10px 0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            fugiat voluptates dolorum nihil molestias harum possimus modi ab
            distinctio aut!
          </Text>
        </Flex>
        <Image
          transition="all 1s ease-in-out"
          cursor="pointer"
          _hover={{ transform: "scale(1.05)" }}
          src={robots}
          alt="robots"
        />

        <Text m="10px 0 10px 0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
          temporibus ex, hic a harum quod molestiae repudiandae magni inventore
          deserunt accusamus eius aut voluptas, maiores tempora rerum ipsum.
          Cupiditate, nihil.
        </Text>
      </Flex>
    </Flex>
  );
};
