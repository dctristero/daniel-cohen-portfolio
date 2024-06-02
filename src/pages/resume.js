import React from "react";
import { chakra, Box, Flex, Icon, Stack, Button } from "@chakra-ui/react";
import resumePDF from "../assets/Daniel-Cohen-Resume.pdf";
import Footer from "../components/footer";

export default function Resume() {
  // const Feature = (props) => {
  //   return (
  //     <Flex>
  //       <Flex shrink={0}>
  //         <Flex
  //           alignItems="center"
  //           justifyContent="center"
  //           h={12}
  //           w={12}
  //           rounded="md"
  //           _light={{ bg: "brand.500" }}
  //           color="white"
  //         >
  //           <Icon
  //             boxSize={6}
  //             fill="none"
  //             viewBox="0 0 24 24"
  //             stroke="currentColor"
  //             aria-hidden="true"
  //           >
  //             {props.icon}
  //           </Icon>
  //         </Flex>
  //       </Flex>
  //       <Box ml={4}>
  //         <chakra.dt
  //           fontSize="lg"
  //           fontWeight="medium"
  //           lineHeight="6"
  //           _light={{ color: "gray.900" }}
  //         >
  //           {props.title}
  //         </chakra.dt>
  //         <chakra.dd mt={2} color="gray.500" _dark={{ color: "gray.400" }}>
  //           {props.children}
  //         </chakra.dd>
  //       </Box>
  //     </Flex>
  //   );
  // };
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
      // alignItems="center"
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
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box
          // pos="fixed"
          bg={["primary.200"]}
          rounded="lg"
          pt={{ base: 2, md: 0 }}
          pb={{ base: 2, md: 1 }}
          mt="2vw"
          mb="4vw"
          w={{ base: "75%", sm: "45%", xl: "30%" }}
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
            mt={0}
          >
            Proficiencies
          </chakra.h1>
        </Box>

        {/* "chakra ui grid examples" and play with justify css for text alignment, 
        use <br/> for line breaks */}

        <Box maxW="6xl" mx="auto" px={{ base: 4, lg: 8 }}>
          <Box
            textAlign="center" 
            bg={["primary.200"]}
            roundedBottom="lg"
            roundedTop="lg"
            pt={4}
            pb={6}
            mt={8}
            mb={8}
            maxW="m"
            mx="auto"
            px={{ base: 3, md: 8 }}
          >
            <chakra.p
              display="block"
              color={["primary.300"]}
              _dark={{ color: "white" }}
              fontSize="2xl"
              mt={0}
            >
              Languages: HTML5, CSS3, JavaScript ES6+, SQL
            </chakra.p>
            <chakra.p
              display="block"
              color={["primary.300"]}
              _dark={{ color: "white" }}
              fontSize="2xl"
              mt={10}
            >
              Applications: Git, GitHub, MongoDB, MySQL, Heroku
            </chakra.p>
            <chakra.p
              display="block"
              color={["primary.300"]}
              _dark={{ color: "white" }}
              fontSize="2xl"
              mt={10}
            >
              Tools: Express, React, Node, Bootstrap, Bulma, GraphQL, Mongoose,
              Jest
            </chakra.p>
            <chakra.p
              display="block"
              color={["primary.300"]}
              _dark={{ color: "white" }}
              fontSize="2xl"
              mt={10}
            >
              Other: Professional writing and teaching experience
            </chakra.p>
          </Box>
        </Box>
        {/* <Box
          textAlign={{ lg: "center" }}
          bg={["primary.200"]}
          roundedBottom="lg"
          roundedTop="lg"
          pt={2}
          pb={4}
          mt={8}
          // mb={8}
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
            mt={0}
          >
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
        </Box> */}
        <Button
          as="a"
          mt="3vw"
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
          // variant="ghost"
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
