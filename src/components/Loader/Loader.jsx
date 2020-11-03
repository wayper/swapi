import React from 'react';
import { Box, Spinner } from "@chakra-ui/core";

const Loader = () => (
  <Box
    d="flex"
    justifyContent="center"
    alignItems="center"
    flexGrow={1}
  >
    <Spinner
      size="xl"
      speed="0.65s"
      thickness="4px"
      color="blue.500"
      emptyColor="gray.200"
    />
  </Box>
);

export default Loader;
