import { ContactItem } from "components/ContactItem/ContactItem";
import PropTypes from 'prop-types';
import {List} from './ContactList.styled'

export const ContactList = ({ contacts, deleteContact }) => (
        <List>
        {contacts.map(({ id, name, number }) => {
                return (
            <ContactItem key={id} id={id} name={name} number={number} deleteContact={deleteContact}/>
            )
            })}
        </List>
)

ContactList.propTypes = {
contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
deleteContact: PropTypes.func.isRequired,
}
