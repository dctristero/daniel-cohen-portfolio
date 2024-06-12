import React from "react";
import { Box, Flex, Image, Link, chakra } from "@chakra-ui/react";
import { bigProjCard } from "../assets/data/data";

const BigProj = () => {
  return (
    <Flex
      bg={["primary.100"]}
      _dark={{ bg: "#3e3e3e" }}
       px={{ base: 0, md: 50}}
       pb={{ base: 6, md: 50}}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        mx="auto"
        rounded="lg"
        bg="white"
        _dark={{ bg: "gray.800" }}

        maxW="4xl"
      >
         <Link href="https://matthewmontiel.github.io/daja-limavi/">
            <Image
            h="full"
            w="full"
            fit="cover"
            src={bigProjCard.image}
            alt="screenshot of DJ Limavi"
            roundedTop="lg"
         />
         </Link>

        <Box 
        bg={["primary.200"]}
        roundedBottom="lg"
        p={{ base: 4, md: 6}}>
          <Box>
            <Link
              display="block"
              color={["primary.300"]}
              _dark={{ color: "white" }}
              fontWeight="bold"
              fontSize="2xl"
              href="https://matthewmontiel.github.io/daja-limavi/"
              mt={0}
              _hover={{ color: "primary.400" }}
            >
              DJ Limavi
            </Link>
            <chakra.p
              mt={2}
              fontSize="sm"
              color={["primary.300"]}
              _dark={{ color: "gray.400" }}
            >
              A webapp to help users find music at the intersections of their favorite genres.
            </chakra.p>
          </Box>

        </Box>
      </Box>
    </Flex>
  );
};

export default BigProj;
