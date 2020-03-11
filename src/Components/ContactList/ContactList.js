import React, { Fragment } from 'react';
import './ContactList.css';

//Component
import ContactItem from "./ContactListItem/ContactItem";

const ContactList = ({ Contact }) => {
    console.log("conactlist =>", Contact);

    const item = Contact.map(item => {
        return (<ContactItem
            key={item.id}
            name={item.name}
            address={item.address}
            phone={item.phone}
            email={item.email}
            avatar={item.avatar}
            gender={item.gender}
            star={item.star}
            onStarChange
        />)
    })
    return (<Fragment>
        <ul className="list-group pull-down" id="contact-list">
            {item}
        </ul>
    </Fragment>
    );
};

export default ContactList;