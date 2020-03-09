import React, { Fragment } from 'react';
import './ContactList.css';

//Component
import ContactItem from "./ContactListItem/ContactItem";

const ContactList = () => {
    return (<Fragment>
        <ul className="list-group pull-down" id="contact-list">
            <ContactItem />
        </ul>
    </Fragment>
    );
};

export default ContactList;