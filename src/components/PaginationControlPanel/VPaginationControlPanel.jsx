import React from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup, Button } from "@chakra-ui/core";

const VpaginationControlPanel = ({
  next,
  previous,
  fetchLocalData,
}) => {

  const onPrevPage = () => {
    fetchLocalData(previous);
  }

  const onNextPage = () => {
    fetchLocalData(next);
  }

  return (
    <ButtonGroup d="flex" justifyContent="center" spacing={4}>
      <Button
        leftIcon="arrow-left"
        variantColor="teal"
        variant="outline"
        onClick={onPrevPage}
        isDisabled={!previous && true}
      >
        Prev
      </Button>
      <Button
        rightIcon="arrow-right"
        variantColor="teal"
        variant="outline"
        onClick={onNextPage}
        isDisabled={!next && true}
      >
        Next
      </Button>
    </ButtonGroup>
  );
}

VpaginationControlPanel.propTypes = {
  next: PropTypes.string,
  previous: PropTypes.string,
  fetchLocalData: PropTypes.func,
};

VpaginationControlPanel.defaultProps = {
  next: '',
  previous: '',
  fetchLocalData: () => {},
};

export default VpaginationControlPanel;
