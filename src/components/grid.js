import React from "react";
import { chakra, Box, Flex, Icon, Stack } from "@chakra-ui/react";
import BigProj from "./card-proj-lg";
import SmallProj from "./card-proj-sm";

const Grid = () => {
  const Feature = (props) => {
    return (
      <Flex>
        <Flex shrink={0}>
          <Flex
            alignItems="center"
            justifyContent="center"
            h={12}
            w={12}
            rounded="md"
            _light={{ bg: "brand.500" }}
            color="white"
          >
            <Icon
              boxSize={6}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {props.icon}
            </Icon>
          </Flex>
        </Flex>
        <Box ml={4}>
          <chakra.dt
            fontSize="lg"
            fontWeight="medium"
            lineHeight="6"
            _light={{ color: "gray.900" }}
          >
            {props.title}
          </chakra.dt>
          <chakra.dd mt={2} color="gray.500" _dark={{ color: "gray.400" }}>
            {props.children}
          </chakra.dd>
        </Box>
      </Flex>
    );
  };
  return (
    <Flex
      bg={["primary.100"]}
      _dark={{ bg: "#3e3e3e" }}
      p={0}
      w="auto"
      minH="92.3vh"
      justifyContent="center"
      alignItems="center"
    >
      <Box py={1} bg={["primary.100"]} _dark={{ bg: "gray.800" }} rounded="xl">
      <Box 
      textAlign={{ lg: "center" }}
      bg={["primary.200"]}
        roundedBottom="lg"
        roundedTop="lg"
        pt={0}
        pb={2}
        mt={8}
        maxW="lg" 
        mx="auto" 
        px={{ base: 4, lg: 8 }}
      >
         
            <chakra.h1
            display="block"
            color={["primary.400"]}
            _dark={{ color: "white" }}
            fontWeight="bold"
            fontSize="6xl"
            href="https://matthewmontiel.github.io/daja-limavi/"
            mt={0}
            >
               Portfolio
            </chakra.h1>
          </Box>
        <Box maxW="6xl" mx="auto" px={{ base: 4, lg: 8 }}>
          <Box textAlign={{ lg: "center" }}>
            <BigProj/>
          </Box>

          <Box 
          mt={0}
          mb={12}>
            <Stack
              spacing={{ base: 10, md: 0 }}
              display={{ md: "grid" }}
              gridTemplateColumns={{ md: "repeat(2,1fr)" }}
              gridColumnGap={{ md: 4 }}
              gridRowGap={{ md: 0 }}
            >
            <SmallProj/>

            </Stack>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};
export default Grid;