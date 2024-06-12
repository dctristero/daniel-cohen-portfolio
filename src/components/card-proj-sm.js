import React from "react";
import { Box, Flex, Grid, Image, chakra, Link } from "@chakra-ui/react";
import { portfolioCards } from "../assets/data/data";

const SmallProj = () => {
  return (
    <Grid
      templateColumns={{ base: "1fr", md: "1fr 1fr"}}
      gap={6}
      w="full"
      alignItems="stretch"
    >
      {portfolioCards.map((portfolioCard) => (
        <Box
          key={portfolioCard.id}
          bg={["primary.200"]}
          _dark={{ bg: "gray.800" }}
          shadow="lg"
          rounded="lg"
          overflow="hidden"
          maxW="sm"
          mx="auto"
          mb={3}
        >
          <Flex
            direction="column" // Stack content vertically
            justifyContent="space-between" // Ensures image is at the bottom
            h="full"
          >
            <Box px={4} py={2}>
              <Link
                display="block"
                color={["primary.300"]}
                _dark={{ color: "white" }}
                fontWeight="bold"
                fontSize="2xl"
                href={portfolioCard.URL}
                _hover={{ color: "primary.400"}}
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

            <Link href={portfolioCard.URL}>
              <Image
                // h={48}
                w="full"
                fit="cover"
                src={portfolioCard.image}
                alt={portfolioCard.alt}
                roundedBottom="lg"
              />
            </Link>
          </Flex>
        </Box>
      ))}
    </Grid>
  );
};

export default SmallProj;

