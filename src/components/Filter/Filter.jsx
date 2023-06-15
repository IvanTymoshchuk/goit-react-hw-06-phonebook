import React from 'react';
import { FormFilter, LabelFilter } from './Filter.styled';
import { Input } from '../FormList/FormList.styled';

const Filter = ({ value, onChange }) => {
  return (
    <FormFilter>
      <LabelFilter>
        <Input
          type="name"
          value={value}
          onChange={onChange}
          placeholder="Please enter a name to search"
        />
      </LabelFilter>
    </FormFilter>
  );
};

export default Filter;
