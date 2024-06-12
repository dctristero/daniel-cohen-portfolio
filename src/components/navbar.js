import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const bg = useColorModeValue("#1c5858", "#1c5858");
  const mobileNav = useDisclosure();

  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        color={["primary.300"]}
        h={{ base: "50px", sm: "60px", xl: "75px" }}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={0}
        display="flex"
        // shadow="md"
        alignItems="center"
      >
        <Flex
          justifyContent="space-between"
          alignItems="center"
          w="full"
          h="full"
        >
          <Flex>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              <VisuallyHidden>Choc</VisuallyHidden>
            </chakra.a>
            <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
              <Link to="/">Daniel Cohen</Link>
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              display={{ base: "none", md: "inline-flex" }}
            >
              <Link to="/daniel-cohen-portfolio">
                <Button
                  color={["primary.300"]}
                  className="navbtn"
                  variant="ghost"
                  _hover={{ color: "primary.400" }}
                  _active={{ color: "primary.400" }}
                >
                  About
                </Button>
              </Link>
              <Link to="/daniel-cohen-portfolio/portfolio">
                <Button
                  color={["primary.300"]}
                  className="navbtn"
                  variant="ghost"
                  _hover={{ color: "primary.400" }}
                  _active={{ color: "primary.400" }}
                >
                  Portfolio
                </Button>
              </Link>
              <Link to="/daniel-cohen-portfolio/resume">
                <Button
                  color={["primary.300"]}
                  className="navbtn"
                  variant="ghost"
                  _hover={{ color: "primary.400" }}
                  _active={{ color: "primary.400" }}
                >
                  Resume
                </Button>
              </Link>
              <Link to="/daniel-cohen-portfolio/contact">
                <Button
                  color={["primary.300"]}
                  className="navbtn"
                  variant="ghost"
                  _hover={{ color: "primary.400" }}
                  _active={{ color: "primary.400" }}
                >
                  Contact
                </Button>
              </Link>
            </HStack>
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={["primary.300"]}
                _dark={{ color: "inherit" }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                h="full"
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  mr={0}
                  w="full"
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />
                {/* <Button
                  as="a"
                  href="/daniel-cohen-portfolio"
                  color={["primary.300"]}
                  className="navbtn"
                  w="full"
                  variant="ghost"
                  _hover={{ color: "primary.400", bg: "primary.200" }}
                  _active={{ color: "primary.400" }}
                  onClick={mobileNav.onClose}
                >
                  About
  </Button> */}
                <Link to="/daniel-cohen-portfolio">
                  <Button
                    color={["primary.300"]}
                    className="navbtn"
                    w="full"
                    variant="ghost"
                    _hover={{ color: "primary.400", bg: "primary.200" }}
                    _active={{ color: "primary.400" }}
                    onClick={mobileNav.onClose}
                  >
                    About
                  </Button>
                </Link>
                <Link to="/daniel-cohen-portfolio/portfolio">
                  <Button
                    color={["primary.300"]}
                    className="navbtn"
                    w="full"
                    variant="ghost"
                    _hover={{ color: "primary.400", bg: "primary.200" }}
                    _active={{ color: "primary.400" }}
                    onClick={mobileNav.onClose}
                  >
                    Portfolio
                  </Button>
                </Link>
                <Link to="/daniel-cohen-portfolio/resume">
                  <Button
                    color={["primary.300"]}
                    className="navbtn"
                    w="full"
                    variant="ghost"
                    _hover={{ color: "primary.400", bg: "primary.200" }}
                    _active={{ color: "primary.400" }}
                    onClick={mobileNav.onClose}
                  >
                    Resume
                  </Button>
                </Link>
                <Link to="/daniel-cohen-portfolio/contact">
                  <Button
                    color={["primary.300"]}
                    className="navbtn"
                    w="full"
                    variant="ghost"
                    _hover={{ color: "primary.400", bg: "primary.200" }}
                    _active={{ color: "primary.400" }}
                    onClick={mobileNav.onClose}
                  >
                    Contact
                  </Button>
                </Link>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
};
export default Navbar;
