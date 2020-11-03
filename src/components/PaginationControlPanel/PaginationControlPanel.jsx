import React from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup, Button } from "@chakra-ui/core";
import { Link } from "react-router-dom";

const PaginationControlPanel = ({
  next,
  previous,
}) => {

  return (
    <ButtonGroup
      d="flex"
      justifyContent="center"
      spacing={4}
      p={4}
    >
      <Link to={`/?url=${previous}`}>
        <Button
          leftIcon="arrow-left"
          variantColor="teal"
          variant="outline"
          isDisabled={!previous && true}
        >
          Prev
        </Button>
      </Link>
      <Link to={`/?url=${next}`}>
        <Button
          rightIcon="arrow-right"
          variantColor="teal"
          variant="outline"
          isDisabled={!next && true}
        >
          Next
        </Button>
      </Link>
    </ButtonGroup>
  );
}

PaginationControlPanel.propTypes = {
  next: PropTypes.string,
  previous: PropTypes.string,
  fetchLocalData: PropTypes.func,
};

PaginationControlPanel.defaultProps = {
  next: '',
  previous: '',
  fetchLocalData: () => {},
};

export default PaginationControlPanel;
