import React from "react";
import { chakra, Box, Flex, Icon, Stack, Button } from "@chakra-ui/react";
import resumePDF from "../assets/Daniel-Cohen-resume-2025.pdf";
import Footer from "../components/footer";

export default function Resume() {
  return (
    <Flex
      bg={["primary.100"]}
      _dark={{ bg: "#3e3e3e" }}
      p={7}
      minHeight={{
        base: "calc(100vh - 50px)",
        sm: "calc(100vh - 60px)",
        xl: "calc(100vh - 75px)",
      }}
      w="full"
      justifyContent="center"
    >
      <Box
        w="full"
        h="full"
        bg={["primary.100"]}
        _dark={{ bg: "gray.800" }}
        px={0}
        py={0}
        mx="auto"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box
          bg={["primary.200"]}
          rounded="lg"
          pt={{ base: 2, md: 0 }}
          pb={{ base: 2, md: 1 }}
          mt="2vw"
          mb="4vw"
          w={{ base: "80%", sm: "55%", lg:"35%", xl: "25%" }}
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
            mt={1}
          >
            Proficiencies
          </chakra.h1>
        </Box>

        <Box maxW="6xl" mx="auto" px={{ base: 4, lg: 8 }}>
          <Box
            textAlign="center" 
            bg={["primary.200"]}
            roundedBottom="lg"
            roundedTop="lg"
            pt={4}
            pb={6}
            mt={4}
            mb={8}
            maxW="m"
            mx="auto"
            px={{ base: 3, md: 8 }}
          >
            <chakra.p
              display="block"
              color={["primary.300"]}
              _dark={{ color: "white" }}
              fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
              mt={2}
            >
              Languages: HTML5, CSS3, JavaScript ES6+, SQL
            </chakra.p>
            <chakra.p
              display="block"
              color={["primary.300"]}
              _dark={{ color: "white" }}
              fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
              mt={10}
            >
              Applications: Git, GitHub, MongoDB, MySQL, Heroku
            </chakra.p>
            <chakra.p
              display="block"
              color={["primary.300"]}
              _dark={{ color: "white" }}
              fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
              mt={10}
            >
              Tools: Express, React, Node, Bootstrap, Bulma, GraphQL, Mongoose,
              Jest
            </chakra.p>
            <chakra.p
              display="block"
              color={["primary.300"]}
              _dark={{ color: "white" }}
              fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
              mt={10}
            >
              Other: Professional experience with Wordpress, teaching, and writing
            </chakra.p>
          </Box>
        </Box>
        
        <Button
          as="a"
          mb="1vw"
          href={resumePDF}
          download="Daniel-Cohen-Resume"
          target="_blank"
          rel="noreferrer"
          bg={["primary.200"]}
          color={["primary.300"]}
          className="navbtn"
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="500"
          px={{ base: "4", md: "6" }}
          py={6}
          _hover={{ color: "primary.400"}}
          _active={{ color: "primary.400"}}
        >
          Click here to download my resume!
        </Button>
      </Box>
      <Footer />
    </Flex>
  );
}

