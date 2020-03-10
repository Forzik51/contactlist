import React, { Component, Fragment } from 'react';
import './ContactItem.css';

class ContactItem extends Component {
    state = {
        name: "Mike Tyson",
        address: "Harm,Stepana Banderu st.",
        phone: "(097) 777-88-88",
        email: "mike.666@example.com",
        avatar: 16,
        gender: "men",
        star:"far fa-star fa-2x"
    };

    onRandomAvatar = () =>{
        const avatar= Math.floor(Math.random()*Math.floor(99));
        this.setState({
            avatar:avatar
        });
    }

    onStar = () =>{
        if (this.state.star==="far fa-star fa-2x") {
            this.setState({
               star:"fas fa-star fa-2x"
            });
        }
        else if (this.state.star==="fas fa-star fa-2x"){
            this.setState({
                star:"far fa-star fa-2x"
            });
        }
        
    }
    render() {
        const { name, address, phone, email, avatar, gender,star } = this.state;
        const URL = `https://api.randomuser.me/portraits/${gender}/${avatar}.jpg`;
        return (
            <Fragment>
                <li className="list-group-item">
                    <div className="row w-100">
                        <div className="col-12 col-sm-6 col-md-3 px-0">
                            <img src={URL} alt="Mike Anamendolla" className="rounded-circle mx-auto d-block img-fluid" />

                        </div>
                        <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
                            <span className="fa fa-mobile fa-2x text-success float-right pulse" title="online now"></span>
                            <label className="name lead">{name}</label>
                            <br />
                            <span className="fa fa-map-marker fa-fw text-muted" data-toggle="tooltip" title="" data-original-title="5842 Hillcrest Rd"></span>
                            <span className="text-muted">{address}</span>
                            <br />
                            <span className="fa fa-phone fa-fw text-muted" data-toggle="tooltip" title="" data-original-title="(870) 288-4149"></span>
                            <span className="text-muted small">{phone}</span>
                            <br />
                            <span className="fa fa-envelope fa-fw text-muted" data-toggle="tooltip" data-original-title="" title=""></span>
                            <span className="text-muted small text-truncate">{email}</span>
                        </div>
                    </div>
                    <button className="btn btn-success col-3" onClick={this.onRandomAvatar}>Random avatar</button>
                    <i className={star} aria-hidden="true" onClick={this.onStar}i></i> 
                </li>
               
                
            </Fragment>
        );
    }
};

export default ContactItem;