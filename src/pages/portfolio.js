import React from "react";
import { chakra, Box, Flex, Icon, Stack } from "@chakra-ui/react";
import BigProj from "../components/card-proj-lg";
import SmallProj from "../components/card-proj-sm";
import Footer from "../components/footer"

export default function portfolio() {
  return (
    <Flex
      bg={["primary.100"]}
      _dark={{ bg: "#3e3e3e" }}
      p={7}
      minHeight={{ base: "calc(100vh - 50px)", sm: "calc(100vh - 60px)", xl: "calc(100vh - 75px)", }}
      w="full"
      justifyContent="center"
      alignItems="center"
      // pos="absolute"
    >
            <Box
        w="full"
        h="full"
        bg={["primary.100"]}
        _dark={{ bg: "gray.800" }}
        px={0}
        py={0}
        mx="auto"
      >
        <Box
          // pos="fixed"
          bg={["primary.200"]}
          rounded="lg"
          pt={{ base: 2, md: 0 }}
          pb={{ base: 2, md: 1 }}
          mt="2vw"
          mb="4vw"
          w={{ base: "80%", sm: "45%", lg:"25%", xl: "20%" }}
          mx="auto"
          px={{ base: 2, lg: 0 }}
          justifyContent="center"
          alignItems="center"
        >
          <chakra.h1
            textAlign="center"
            display="block"
            color={["primary.300"]}
            _dark={{ color: "white" }}
            fontWeight="bold"
            fontSize={{ base: "4xl", md: "5xl" }}
            // fontSize="6xl"
            mt={1}
          >
            Portfolio
          </chakra.h1>
        </Box>
        <Box 
          maxW="6xl" 
          mx="auto" 
          // px={{ base: 4, lg: 8 }}
        >
          <Box textAlign={{ lg: "center" }}>
            <BigProj />
          </Box>

          <Box mt={0} mb={12}>
            {/* <Stack
              spacing={{ base: 10, md:0 }}
              display={{ md: "grid" }}
              gridTemplateColumns={{ md: "repeat(2,1fr)" }}
              gridColumnGap={{ md: 2 }}
              gridRowGap={{ md: 0 }}
              // alignItems="stretch"
            > */}
              <SmallProj />
            {/* </Stack> */}
          </Box>
        </Box>
      </Box>
      <Footer/>
    </Flex>
  );
}

