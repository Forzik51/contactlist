import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Components
import ContactList from "./Components/ContactList/ContactList";

const App = () => {
    return (

        <div className="container">
            <h1>Contact Item</h1>
            <div className="card card-default" id="card_contacts">
                <div id="contacts" className="panel-collapse collapse show" aria-expanded="true" >
                    <ContactList />
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

