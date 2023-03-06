import PropTypes from 'prop-types';
import { FilterBox,FilterLabel, FilterInput } from './Filter.styled';

export const Filter = ({ onChange, value }) => {
  return (
    <FilterBox>
      <FilterLabel>Find contacts by name</FilterLabel>
      <FilterInput type="text" onChange={onChange} value={value} />
    </FilterBox>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
