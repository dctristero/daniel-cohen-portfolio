import React from "react";

import { Box, Button, chakra, Flex, SimpleGrid, GridItem, Image, Icon } from "@chakra-ui/react";
import { aboutPic } from "../assets/data/data.js"
import Footer from "../components/footer"

// var navheight = {{ base: "50px", sm: "60px", xl: "75px" }};


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
          bg={["primary.200"]}
          roundedBottom="lg"
          roundedTop="lg"
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
            About Me
          </chakra.h1>
        </Box>

        {/* look at chakra ui grid examples to make better */}
        
        <SimpleGrid
          // alignItems="center"
          columns={{ sm: 1, md: 4 }}
          flexDirection="column-reverse"
          m={{ sm: "0", md: "0" }}
          spacingY={{ base: 0, md: 0 }}
          spacingX={{ base: 0, md: 0 }}
          alignItems="flex-start"
          width={{ sm: "100%", md: "100%" }}
          pb={7}
        >
          <GridItem colSpan={{ sm: 1, md: 1 }} p={2}>
          <Box id="aboutPic"
            width={{base: "60%", md:"95%" }}
            h="full"
            px={3}
            py={3}
            bg={["primary.200"]}
            _dark={{ bg: "gray.700" }}
            roundedTop="lg"
            roundedBottom="lg"
            mx="auto"
          >
            <Image
            // h={{ sm: "30vh", md: "full" }}
            // w="full"
            fit="scale-down"
            src={aboutPic.image}
            alt="picture of Daniel Cohen"
            roundedTop="lg"
            roundedBottom="lg"
         />
          </Box>
          </GridItem>
          {/* <Box order={{ base: "initial", md: 2 }}> */}
          <GridItem colSpan={{ sm: 1, md: 3 }} p={2}>
          <Box
            textAlign="left"
            bg={["primary.200"]}
            roundedBottom="lg"
            roundedTop="lg"
            pt={4}
            pb={6}
            mt={0}
            mb={8}
            // w="100%"
            // maxW="m"
            mx="auto"
            px={{ base: 4, lg: 8 }}
          >
            <chakra.p
              display="block"
              color={["primary.300"]}
              _dark={{ color: "white" }}
              fontSize="xl"
              mt={0}
            >
               I am a motivated, hard-working Full Stack Web Developer with a penchant for creative problem solving. My proficiencies include React, CSS, HTML, Javascript, Express, MongoDb, and MySQL. At the UT Coding Bootcamp, my close-knit team developed tools for users to discover new media, catalogue their personal collections, and connect with strangers who share niche interests.
            </chakra.p>
            <chakra.p
              display="block"
              color={["primary.300"]}
              _dark={{ color: "white" }}
              fontSize="xl"
              mt={6}
            >
              The bootcamp isn't the only experience I carry with me into the development world. 
              My background in music theory gave me the skills to comfortably navigate and build the complex, 
              interconnected logic of the back end. My experience in numerous staged opera productions taught me about
              visual communication, and informs my clear, artistic approach to front-end development. 
              And my experiences as a teacher and a freelance writer have made me a strong communicator, 
              someone collaborators can depend on for information and guidance.
            </chakra.p>
            <chakra.p
              display="block"
              color={["primary.300"]}
              _dark={{ color: "white" }}
              fontSize="xl"
              mt={6}
            >
              I am eager to find a team that can utilize my skills, and to embark on an exciting new chapter in my professional life.
            </chakra.p>
          </Box>
          </GridItem>
          
          {/* </Box> */}
         
        </SimpleGrid>
      </Box>
      <Footer/>
    </Flex>
    </div>
  );
};
