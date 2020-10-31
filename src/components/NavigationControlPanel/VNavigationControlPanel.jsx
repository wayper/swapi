import React from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup, Button } from "@chakra-ui/core";

const VNavigationControlPanel = ({
  next,
  previous,
  fetchLocalData,
}) => {
  console.log(next);

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

VNavigationControlPanel.propTypes = {
  next: PropTypes.string,
  previous: PropTypes.string,
  fetchLocalData: PropTypes.func,
};

VNavigationControlPanel.defaultProps = {
  next: '',
  previous: '',
  fetchLocalData: () => {},
};

export default VNavigationControlPanel;
