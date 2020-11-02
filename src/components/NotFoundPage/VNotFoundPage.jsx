import React from 'react';
import {
  Box,
  Heading,
  Text,
} from "@chakra-ui/core";

const VNotFoundPage = () => (
  <Box p={5} shadow="md" borderWidth="1px" bg="yellow.50" w="100%" rounded="lg" color="white" mt={3}>
    <Heading as="h2" color="yellow.700">404</Heading>
    <Box d="flex">
      <Text fontWeight="bold" color="yellow.700" mt={4} mr={2}>Что-то пошло не так!</Text>
      <Text color="yellow.700" mt={4}>Не возможно отобразиь страницу!</Text>
    </Box>
  </Box>
);

export default VNotFoundPage;
