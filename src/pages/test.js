import React from "react";
import { Box, Flex, chakra } from "@chakra-ui/react";
import Footer from "../components/footer";

// Assume the navbar height is 50px
const NAVBAR_HEIGHT = "50px";

// var navheight = {{ base: "50px", sm: "60px", xl: "75px" }};
minHeight={{ base: "calc(100vh - 50px)", sm: "calc(100vh - 60px)", xl: "calc(100vh - 75px)", }}
export default function About() {
  return (
    <div>
      <Flex
        bg={["primary.100"]}
        _dark={{ bg: "#3e3e3e" }}
        p={7}
        w="full"
        minHeight={`calc(100vh - ${NAVBAR_HEIGHT})`} // Adjust for navbar height
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Box
          w="full"
          h="full"
          bg={["primary.100"]}
          _dark={{ bg: "gray.800" }}
          mx="auto"
        >
          <Box
            bg={["primary.200"]}
            roundedBottom="lg"
            roundedTop="lg"
            pt={{ base: 2, md: 0 }}
            pb={2}
            mt={2}
            mb={8}
            w={{ base: "70%", sm: "45%", xl: "30%" }}
            mx="auto"
          >
            <chakra.h1
              textAlign="center"
              fontWeight="bold"
              fontSize={{ base: "3xl", md: "6xl" }}
              color={["primary.300"]}
              _dark={{ color: "white" }}
              mt={0}
            >
              About Me
            </chakra.h1>
          </Box>

          {/* Additional content */}
        </Box>

        <Footer />
      </Flex>
    </div>
  );
}
