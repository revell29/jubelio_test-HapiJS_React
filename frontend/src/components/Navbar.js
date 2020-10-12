import React from "react";
import {
  Box,
  Heading,
  Flex,
  Text,
  useColorMode,
  IconButton,
} from "@chakra-ui/core";

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

export const Navbar = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg={colorMode === "light" ? "white" : "gray.700"}
      shadow="sm"
      color={colorMode === "light" ? "gray.700" : "white"}
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg">
          Tokosaya
        </Heading>
      </Flex>

      <Box display={{ sm: "block", md: "none" }}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display="flex"
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        <MenuItems>Product</MenuItems>
      </Box>

      <Box display="block" mt={{ base: 4, md: 0 }}>
        <IconButton
          onClick={() => toggleColorMode()}
          aria-label="Search database"
          icon={colorMode === "light" ? "sun" : "moon"}
        />
      </Box>
    </Flex>
  );
};
