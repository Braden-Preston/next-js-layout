import React, { useState } from 'react';
import Flex from '@chakra-ui/core/dist/Flex';
import { Chip } from 'components/atoms/chips';
import Input from '@chakra-ui/core/dist/Input';
import FormLabel from '@chakra-ui/core/dist/FormLabel';
import { makeStyle, scribeTheme1 } from './index';

export const MultiSelect = ({ placeholder, options = [], updateOptions }) => {

  const [state, setState] = useState({
    value: "",
    selectedOptions: options
  });

  /**
   * Updates the appropriate state prop by its field name from the
   * form where 'name' is a prop on the target component
   */
  const updateField = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setState({ ...state, [name]: value });
  };

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {

      let newOptions = [...state.selectedOptions, state.value];
      options = newOptions; // Update the hoisted list
      setState({
        ...state,
        value: '',
        selectedOptions: newOptions
      });
    }
  };

  return (
    <Flex
      m={[2, 3]}
      direction="column" p={4}
      style={makeStyle(scribeTheme1, true)}
    >

      <FormLabel>Country</FormLabel>

      <Flex>
        {state.selectedOptions.map((option, index) => <Chip
          key={index}
        >{{
          title: option,
          onDelete: () => {
            let remainingOptions = state.selectedOptions
              .slice(0, index)
              .concat(state.selectedOptions.slice(index + 1, state.selectedOptions.length));

            setState({
              ...state,
              selectedOptions: remainingOptions
            });
          }
        }}</Chip>)}
      </Flex>

      <Input
        type='text'
        placeholder={placeholder}
        value={state.value}
        name='value'
        onChange={updateField}
        onKeyDown={onKeyDown}
      ></Input>

    </Flex>

  );
};
