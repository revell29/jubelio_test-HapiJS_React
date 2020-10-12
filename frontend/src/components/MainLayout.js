import React from "react";
import { Stack } from "@chakra-ui/core";

const MainStack = (props) => {
  return <Stack mx="2rem" my="2rem" spacing="1rem" {...props} />;
};

export const MainLayout = ({ children, rest }) => (
  <MainStack {...rest}>{children}</MainStack>
);
