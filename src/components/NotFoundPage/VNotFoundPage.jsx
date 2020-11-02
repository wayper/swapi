import React from 'react';
import {
  Box,
  Heading,
  Text,
} from "@chakra-ui/core";

const VNotFoundPage = () => (
  <Box
    d="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    flexGrow={1}
    p={5}
    shadow="md"
    borderWidth="1px"
    bg="yellow.50"
    rounded="lg"
    color="white"
  >
    <Heading
      as="h2"
      fontSize="6xl"
      color="yellow.700"
    >
      404
    </Heading>
    <Box
      d="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Text
        fontSize="4xl"
        fontWeight="bold"
        color="yellow.700"
        mt={4}
      >
        Что-то пошло не так!
      </Text>
      <Text
        color="yellow.700"
        fontSize="3xl"
      >
        Страница не найдена
      </Text>
    </Box>
  </Box>
);

export default VNotFoundPage;
