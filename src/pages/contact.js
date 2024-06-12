import React from "react";
import { chakra, Box, Flex, Icon, Stack } from "@chakra-ui/react";
import resumePDF from "../assets/Daniel-Cohen-Resume.pdf"
import Footer from "../components/footer"

const Contact = () => {
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
   <>
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
            Contact
          </chakra.h1>
        </Box>

        {/* "chakra ui grid examples" and play with justify css for text alignment, 
        use <br/> for line breaks */}
        
        {/* <Box maxW="6xl" mx="auto" px={{ base: 4, lg: 8 }}> */}
        <Box
            textAlign="center" 
            bg={["primary.200"]}
            roundedBottom="lg"
            roundedTop="lg"
            pt={6}
            pb={7}
            mt={8}
            mb={8}
            maxW="90vw"
            mx="auto"
            px={{ base: 3, md: 8 }}
          >
            <chakra.p
              display="block"
              color={["primary.300"]}
              _dark={{ color: "white" }}
              fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
              mt={0}
            >
               Email:&nbsp;             
               <chakra.a
                href="mailto:dctristero@gmail.com"
                target="_blank"
                // rel="noreferrer"
                color={["primary.300"]}
                fontWeight="400"
                _hover={{ color: "primary.400"}}
              >
                dctristero@gmail.com
              </chakra.a>
               <br/>
               <br/>
               Phone: (512) 644-1087
               <br/>
               <br/>
               GitHub:&nbsp; 
               <chakra.a
                href="https://github.com/dctristero"
                download="Daniel-Cohen-Resume"
                target="_blank"
                // rel="noreferrer"
                color={["primary.300"]}
                fontWeight="400"
                _hover={{ color: "primary.400"}}
              >
               https://github.com/dctristero              
               </chakra.a>
               
            </chakra.p>
          </Box>
        {/* </Box> */}
      </Box>
      <Footer/>
    </Flex>
    </>
   
  );
};
export default Contact;

