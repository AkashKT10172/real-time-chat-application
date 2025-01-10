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
        <Tabs.Root defaultValue="Log-In" variant="plain">
          <Tabs.List bg="bg.muted" rounded="l3" p="1">
            <Tabs.Trigger
              value="Log-In"
              fontSize="lg" // Adjust the font size
              p="8"
              py='0'         // Adjust padding to make the button larger
              h="50px"      // Adjust height for larger button
              borderRadius="md" // Optional: add rounded corners
            >
              <LuUser />
              Log-In
            </Tabs.Trigger>
            <Tabs.Trigger
              value="Sign-Up"
              fontSize="lg" // Adjust the font size
              p="8"  
              py='0'       // Adjust padding to make the button larger
              h="50px"      // Adjust height for larger button
              borderRadius="md" // Optional: add rounded corners
            >
              <LuUser />
              Sign-Up
            </Tabs.Trigger>
            <Tabs.Indicator rounded="l2" />
          </Tabs.List>
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
