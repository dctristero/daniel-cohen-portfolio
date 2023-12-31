import React from "react";

import { Box, Button, chakra, Flex, SimpleGrid, Image, Icon } from "@chakra-ui/react";
import { aboutPic } from "../assets/data/data.js"
import Footer from "../components/footer"


export default function About(){
   // const Feature = (props) => {
   //    return (
   //      <Flex>
   //        <Flex shrink={0}>
   //          <Flex
   //            alignItems="center"
   //            justifyContent="center"
   //            h={12}
   //            w={12}
   //            rounded="md"
   //            _light={{ bg: "brand.500" }}
   //            color="white"
   //          >
   //            <Icon
   //              boxSize={6}
   //              fill="none"
   //              viewBox="0 0 24 24"
   //              stroke="currentColor"
   //              aria-hidden="true"
   //            >
   //              {props.icon}
   //            </Icon>
   //          </Flex>
   //        </Flex>
   //        <Box ml={4}>
   //          <chakra.dt
   //            fontSize="lg"
   //            fontWeight="medium"
   //            lineHeight="6"
   //            _light={{ color: "gray.900" }}
   //          >
   //            {props.title}
   //          </chakra.dt>
   //          <chakra.dd mt={2} color="gray.500" _dark={{ color: "gray.400" }}>
   //            {props.children}
   //          </chakra.dd>
   //        </Box>
   //      </Flex>
   //    );
   //  };
  return (
   <div>
    <Flex
      bg={["primary.100"]}
      _dark={{ bg: "#3e3e3e" }}
      p={7}
      w="full"
      justifyContent="center"
      alignItems="center"
      //pos="absolute"
    >
      <Box
        w="full"
        h="full"
        bg={["primary.100"]}
        _dark={{ bg: "gray.800" }}
        px={8}
        py={0}
        mx="auto"
      >
         <Box
          textAlign={{ lg: "center" }}
          bg={["primary.200"]}
          roundedBottom="lg"
          roundedTop="lg"
          pt={0}
          pb={2}
          mt={2}
          mb={8}
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
            About Me
          </chakra.h1>
        </Box>

        {/* look at chakra ui grid examples to make better */}
        
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, md: 2 }}
          flexDirection="column-reverse"
          mb={24}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box id="aboutPic"
            w="60%"
            h="100%"
            px={3}
            py={3}
            bg={["primary.200"]}
            _dark={{ bg: "gray.700" }}
            roundedTop="lg"
            roundedBottom="lg"
          >
            <Image
            h="full"
            w="full"
            fit="scale-down"
            src={aboutPic.image}
            alt="picture of Daniel Cohen"
            roundedTop="lg"
            roundedBottom="lg"
         />
          </Box>
          <Box order={{ base: "initial", md: 2 }}>
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
               I am a motivated, hard-working Full Stack Web Developer with a penchant for creative problem solving. My proficiencies include React, CSS, HTML, Javascript, Express, MongoDb, and MySQL. At the UT Coding Bootcamp, my close-knit team developed tools for users to discover new media, catalogue their personal collections, and connect with strangers who share niche interests.
            </chakra.p>
            <chakra.p
              display="block"
              color={["primary.300"]}
              _dark={{ color: "white" }}
              fontSize="3xl"
              mt={10}
            >
              The bootcamp isn't the only experience I carry with me into the development world. My background in music theory gave me the skills to comfortably navigate and build the complex, interconnected logic of the back end. My experience in numerous opera productions taught me to put myself in the head of an audience member (or user) and understand what they see, which has informed my clear and artistic approach to front-end development. And my experiences as a teacher and a freelance writer have made me a strong communicator, someone collaborators can depend on for information and guidance.
            </chakra.p>
            <chakra.p
              display="block"
              color={["primary.300"]}
              _dark={{ color: "white" }}
              fontSize="3xl"
              mt={10}
            >
              I am eager to find a team that can utilize my skills, and to embark on an exciting new chapter in my professional life.
            </chakra.p>
          </Box>
          </Box>
         
        </SimpleGrid>
      </Box>
      <Footer/>
    </Flex>
    </div>
  );
};
