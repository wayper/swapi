import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Box,
} from "@chakra-ui/core";

const Modal = ({ text, clearMessage }) => (
  <Box zIndex={1000} d="flex" justifyContent="center" alignItems="center" w="100%" h="100vh" position="absolute">
    <Box zIndex={2000} bg="white" p={5}>
      <Box minWidth="300px" pt={3} pb={3}>{text}</Box>
      <Box d="flex" justifyContent="flex-end" pt={3}>
        <Button
          variantColor="blue"
          onClick={clearMessage}
        >
          Close
        </Button>
      </Box>
    </Box>
    <Box d="flex" opacity={0.9} bg="gray.900" w="100%" h="100vh" position="absolute" />
  </Box>
);

Modal.propTypes = {
  text: PropTypes.string,
  clearMessage: PropTypes.func,
};

Modal.defaultProps = {
  text: '',
  clearMessage: () => {},
};

export default Modal;
