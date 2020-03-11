import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Components
import ContactList from "./Components/ContactList/ContactList";

class App extends React.Component {

    state = {
        Contact: [
            {
                id: 1,
                name: "Mike Tyson",
                address: "Harm,Stepana Banderu st.",
                phone: "(097) 777-88-88",
                email: "mike.666@example.com",
                avatar: 16,
                gender: "men",
                star: "far fa-star fa-2x"
            },
            {
                id:2,
                name: "Max ",
                address: "Rivne,Stepana Banderu st.",
                phone: "(097) 777-88-88",
                email: "max.666@example.com",
                avatar: 14,
                gender: "men",
                star: "far fa-star fa-2x"
            },
            {
                id:3,
                name: "Lora ",
                address: "Harm,Stepana Banderu st.",
                phone: "(097) 777-88-88",
                email: "Lora.666@example.com",
                avatar: 92,
                gender: "women",
                star: "far fa-star fa-2x"
            },
            {
                id:4,
                name: "Jon ",
                address: "Harm,Stepana Banderu st.",
                phone: "(097) 777-88-88",
                email: "mike.666@example.com",
                avatar: 84,
                gender: "men",
                star: "far fa-star fa-2x"
            },
            {
                id:5,
                name: "Lola ",
                address: "Harm,Stepana Banderu st.",
                phone: "(097) 777-88-88",
                email: "Jon.666@example.com",
                avatar: 65,
                gender: "women",
                star: "far fa-star fa-2x"
            }
        ]
    };

    onStarChange = id =>{
        console.log(id);
        
    };

    render() {
        return (


            <div className="container">
                <h1>Contact List</h1>
                <div className="card card-default" id="card_contacts">
                    <div id="contacts" className="panel-collapse collapse show" aria-expanded="true" >
                        <ContactList Contact={this.state.Contact} onStarChange={this.onStarChange} />
                    </div>
                </div>
            </div>
        );
    };
}


ReactDOM.render(<App />, document.getElementById('root'));

