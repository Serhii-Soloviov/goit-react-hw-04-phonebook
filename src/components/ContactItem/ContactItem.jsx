import PropTypes from 'prop-types';
import { Item, Text, ButtonDelete, Marker } from './ContactItem.styled';

export const ContactItem = ({ name, number, deleteContact }) => {
  return (
    <Item>
      <Marker/>
      <Text>
        {name}: {number}
      </Text>
      <ButtonDelete type="button" onClick={deleteContact}>
        Delete
      </ButtonDelete>
    </Item>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
