import React from 'react';
import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const App = () => {
    return (
        <Fragment>
            <div class="container">

                <div class="card card-default" id="card_contacts">
                    <div id="contacts" class="panel-collapse collapse show" aria-expanded="true" style="">
                        <ul class="list-group pull-down" id="contact-list"></ul>
                    </div>
                </div>
            </div>
        </Fragment>);
}

ReactDOM.render(<App />, document.getElementById('root'));


