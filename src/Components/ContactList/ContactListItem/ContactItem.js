import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./ContactItem.css";

class ContactItem extends Component {
  state = {
    name: this.props.name,
    address: this.props.address,
    phone: this.props.phone,
    email: this.props.email,
    avatar: this.props.avatar,
    gender: this.props.gender,
    star: this.props.star
  };

  onRandomAvatar = () => {
    const avatar = Math.floor(Math.random() * Math.floor(99));
    this.setState({
      avatar: avatar
    });
  };

  onStar = () => {
    // let star = this.state.star;
    // this.setState({
    //   star: !star
    // });
    // this.props.onStarChange();
  };
   
        

    render() {
        const { name, address, phone, email, avatar, gender } = this.state;
        const URL = `https://api.randomuser.me/portraits/${gender}/${avatar}.jpg`;
        if (this.props.star) {
            var favoriteStyle = "fas strr fa-star fa-2x";
          } else {
             favoriteStyle = "far fa-star fa-2x";
          }
        return (
            <Fragment>
                <li className="list-group-item">
                    <div className="row w-100">
                        <div className="col-12 col-sm-6 col-md-3 px-0">
                            <img src={URL} alt="Mike Anamendolla" className="rounded-circle mx-auto d-block img-fluid" />

                        </div>
                        <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
                        <span className="fas fa-trash fa-2x text-danger float-right " title="Delete" onClick={this.props.onDeleteContact}></span>
                        <Link to="/edit" className="fas fa-edit fa-2x text-success float-right " title="edit" onClick={this.props.onEditContact}></Link>
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
                    <i /*className={star} aria-hidden="true" onClick={this.onStar}*/className={favoriteStyle}
                  aria-hidden="true"
                  onClick={this.props.onStarChange}></i> 
                </li>
               
                
            </Fragment>
        );
    }
};

export default ContactItem;