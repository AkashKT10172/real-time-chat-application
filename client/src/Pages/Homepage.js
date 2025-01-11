import React from "react";
import { Container, Box, Text, Tabs } from "@chakra-ui/react";
import { LuUser } from "react-icons/lu";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

const Homepage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p="3"
        bg="azure"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text
          color="black"
          justifySelf="center"
          fontSize="4xl"
          fontFamily="Work Sans"
          fontWeight="bold"
        >
          Chat-A-BIT
        </Text>
      </Box>
      <Box
        p="4"
        bg="azure"
        w="100%"
        borderRadius="lg"
        borderWidth="1px"
        justifyItems="center"
      >
        <Tabs.Root defaultValue="Log-In" variant="unstyled">
          <Tabs.List display="flex" gap="4" justifyContent="center" p="2">
            <Tabs.Trigger
              value="Log-In"
              fontSize="lg"
              fontWeight="semibold"
              p="4"
              h="50px"
              borderRadius="md"
              bg="teal.500"
              color="white"
              _hover={{ bg: "teal.600" }}
              _selected={{ bg: "teal.700", boxShadow: "md" }}
            >
              <LuUser style={{ marginRight: "8px" }} />
              Log-In
            </Tabs.Trigger>
            <Tabs.Trigger
              value="Sign-Up"
              fontSize="lg"
              fontWeight="semibold"
              p="4"
              h="50px"
              borderRadius="md"
              bg="blue.500"
              color="white"
              _hover={{ bg: "blue.600" }}
              _selected={{ bg: "blue.700", boxShadow: "md" }}
            >
              <LuUser style={{ marginRight: "8px" }} />
              Sign-Up
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Indicator rounded="md" bg="gray.200" height="3px" />
          <Tabs.Content color="black" value="Log-In">
            <Box d="flex" justifyContent="center">
              <Login />
            </Box>
          </Tabs.Content>
          <Tabs.Content color="black" value="Sign-Up">
            <Box d="flex" justifyContent="center">
              <Signup />
            </Box>
          </Tabs.Content>
        </Tabs.Root>
      </Box>
    </Container>
  );
};

export default Homepage;
