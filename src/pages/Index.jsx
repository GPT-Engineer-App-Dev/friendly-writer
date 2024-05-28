import { Box, Container, Flex, Heading, Text, VStack, Link, HStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="brand.800" color="white" py={4}>
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center">
            <Heading as="h1" size="lg">
              <Link as={RouterLink} to="/" _hover={{ textDecoration: "none" }}>
                My Blog
              </Link>
            </Heading>
            <HStack spacing={4}>
              <Link as={RouterLink} to="/" _hover={{ textDecoration: "none" }}>
                Home
              </Link>
              <Link as={RouterLink} to="/about" _hover={{ textDecoration: "none" }}>
                About
              </Link>
              <Link as={RouterLink} to="/contact" _hover={{ textDecoration: "none" }}>
                Contact
              </Link>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Main Content Area */}
      <Container maxW="container.lg" py={8}>
        <VStack spacing={8} align="start">
          <Box>
            <Heading as="h2" size="xl" mb={4}>
              Welcome to My Blog
            </Heading>
            <Text fontSize="lg">
              This is a place where I share my thoughts, experiences, and knowledge on various topics. Stay tuned for more updates!
            </Text>
          </Box>
          {/* Example Blog Post */}
          <Box>
            <Heading as="h3" size="lg" mb={2}>
              Blog Post Title
            </Heading>
            <Text fontSize="md" color="gray.600" mb={4}>
              Posted on January 1, 2023
            </Text>
            <Text fontSize="md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
            </Text>
          </Box>
        </VStack>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="brand.800" color="white" py={4} mt={8}>
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center">
            <Text>&copy; 2023 My Blog. All rights reserved.</Text>
            <HStack spacing={4}>
              <Link href="https://twitter.com" isExternal>
                <FaTwitter />
              </Link>
              <Link href="https://github.com" isExternal>
                <FaGithub />
              </Link>
              <Link href="https://linkedin.com" isExternal>
                <FaLinkedin />
              </Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;