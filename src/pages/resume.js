import React from "react";
import { chakra, Box, Flex, Icon, Stack } from "@chakra-ui/react";
import resumePDF from "../assets/Daniel-Cohen-Resume.pdf"
import Footer from "../components/footer"

const Resume = () => {
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
   <>
    <Flex
      bg={["primary.100"]}
      _dark={{ bg: "#3e3e3e" }}
      p={0}
      w="100%"
      minH="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Box py={1} bg={["primary.100"]} _dark={{ bg: "gray.800" }} rounded="xl"
      w="100%"
      h="100%">
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
            mt={0}
          >
            Proficiencies
          </chakra.h1>
        </Box>

        {/* "chakra ui grid examples" and play with justify css for text alignment, 
        use <br/> for line breaks */}

        <Box maxW="6xl" mx="auto" px={{ base: 4, lg: 8 }}>
          <Box
            textAlign={{ lg: "center" }}
            bg={["primary.200"]}
            roundedBottom="lg"
            roundedTop="lg"
            pt={4}
            pb={6}
            mt={8}
            mb={8}
            maxW="m"
            mx="auto"
            px={{ base: 4, lg: 8 }}
          >
            <chakra.p
              display="block"
              color={["primary.300"]}
              _dark={{ color: "white" }}
              fontSize="3xl"
              mt={0}
            >
              Languages: HTML5, CSS3, JavaScript ES6+, SQL
            </chakra.p>
            <chakra.p
              display="block"
              color={["primary.300"]}
              _dark={{ color: "white" }}
              fontSize="3xl"
              mt={10}
            >
              Applications: Git, GitHub, MongoDB, MySQL, Heroku
            </chakra.p>
            <chakra.p
              display="block"
              color={["primary.300"]}
              _dark={{ color: "white" }}
              fontSize="3xl"
              mt={10}
            >
              Tools: Express, React, Node, Bootstrap, Bulma, GraphQL, Mongoose,
              Jest
            </chakra.p>
            <chakra.p
              display="block"
              color={["primary.300"]}
              _dark={{ color: "white" }}
              fontSize="3xl"
              mt={10}
            >
              Other: Professional writing 
              <br/>
              and teaching experience
            </chakra.p>
          </Box>
        </Box>
        <Box
          textAlign={{ lg: "center" }}
          bg={["primary.200"]}
          roundedBottom="lg"
          roundedTop="lg"
          pt={2}
          pb={4}
          mt={8}
          mb={8}
          maxW="2xl"
          mx="auto"
          px={{ base: 4, lg: 8 }}
        >
          
            <chakra.p
            display="block"
            color={["primary.300"]}
            _dark={{ color: "white" }}
            fontSize="4xl"
            fontWeight="400"
            mt={0}>
              Click&nbsp;
              <chakra.a
                href={resumePDF}
                download="Daniel-Cohen-Resume"
                target="_blank"
                rel="noreferrer"
                color={["primary.400"]}
                fontWeight="600"
                textDecoration="underline"
              >
                here
              </chakra.a>
              &nbsp;to download my resume!
            </chakra.p>
          
        </Box>
      </Box>
      <Footer/>
    </Flex>
    </>
   
  );
};
export default Resume;
