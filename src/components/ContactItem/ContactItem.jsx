import PropTypes from 'prop-types';
import {Item, Button} from './ContactItem.styled'

export const ContactItem = ({ id, name, number, deleteContact }) => {
    return (
        <Item key={id}>{name}: {number} <Button type="button" onClick={() => deleteContact(id)}>Delete</Button></Item>
    )
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
}
