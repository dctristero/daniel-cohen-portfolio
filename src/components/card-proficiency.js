import React from "react";
import { Box, Flex, Image, chakra, Link } from "@chakra-ui/react";
import { proficiencyCards } from "../assets/data/data";

const Proficiency = () => {
   return (
    <>
    {proficiencyCards.map((proficiencyCard) => (
       <Flex
       key={proficiencyCard.id}
       bg={["primary.100"]}
       _dark={{ bg: "#3e3e3e" }}
       pt={10}
       w="full"
       alignItems="center"
       justifyContent="center"
     >
       <Box
         maxW="sm"
         mx="auto"
         bg={["primary.200"]}
         _dark={{ bg: "gray.800" }}
         shadow="lg"
         rounded="lg"
       >
         <Box px={4} py={2}>
           <chakra.h1
             color={["primary.300"]}
             _dark={{ color: "white" }}
             fontWeight="bold"
             fontSize="3xl"
             textTransform="uppercase"
           >
             {proficiencyCard.title}
           </chakra.h1>
           <chakra.p
             mt={1}
             fontSize="sm"
             color={["primary.300"]}
             _dark={{ color: "gray.400" }}
           >
             {proficiencyCard.body}
           </chakra.p>
         </Box>
       </Box>
     </Flex>
      ))}
     </>
   );
 };

 export default Proficiency;