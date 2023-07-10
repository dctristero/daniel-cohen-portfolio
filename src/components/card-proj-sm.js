import React from "react";
import { Box, Flex, Image, chakra, Link } from "@chakra-ui/react";
import { portfolioCards } from "../assets/data/data";

const SmallProj = () => {
  return (
   <>
   {portfolioCards.map((portfolioCard) => (
      <Flex
      key={portfolioCard.id}
      bg={["primary.100"]}
      _dark={{ bg: "#3e3e3e" }}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        maxW="s"
        mx="auto"
        bg={["primary.200"]}
        _dark={{ bg: "gray.800" }}
        shadow="lg"
        rounded="lg"
      >
        <Box px={4} py={2}>
          {/* <chakra.h1
            color={["primary.300"]}
            _dark={{ color: "white" }}
            fontWeight="bold"
            fontSize="3xl"
            textTransform="uppercase"
          >
            {portfolioCard.title}
          </chakra.h1> */}
          <Link
              display="block"
              color={["primary.300"]}
              _dark={{ color: "white" }}
              fontWeight="bold"
              fontSize="2xl"
              href={portfolioCard.URL}
              mt={0}
              _hover={{ color: "gray.600", textDecor: "underline" }}
            >
              {portfolioCard.title}
            </Link>
          <chakra.p
            mt={1}
            fontSize="sm"
            color={["primary.300"]}
            _dark={{ color: "gray.400" }}
          >
            {portfolioCard.description}
          </chakra.p>
        </Box>

        <Link
              href={portfolioCard.URL}
            >
              <Image
          h={48}
          w="full"
          fit="cover"
          mt={2}
          src={portfolioCard.image}
          alt={portfolioCard.alt}
          roundedBottom="lg"
        />
            </Link>

        
      </Box>
    </Flex>
     ))}
    </>
  );
};

export default SmallProj;