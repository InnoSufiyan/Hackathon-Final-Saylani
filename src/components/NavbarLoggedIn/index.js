import './App.css';
import React from "react";
import Avatar from '../Avatar'
import {Link} from "react-router-dom";






export default function Navbar({ changeUser, userDetails }) {


    const sellingPage = () => {
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img
                            style={{width: 100}}
                        src= "/images/LogoKhanaSabkliye-01.png" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <div className="dropdown">
                                <button className="btn countryButton dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    All Pakistan
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>

                            <div className="dropdown">
                                <button className="btn allCategories dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    All Categories
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href="#">Request Tab</a></li>
                                    <li><a className="dropdown-item" href="#">Approved and Rejected Request</a></li>
                                    <li><a className="dropdown-item" href="#">Branch Manager Tab</a></li>
                                </ul>
                            </div>
                            <form className="d-flex">
                                <input className="form-control" type="search" placeholder="Search Cities for help" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </ul>
                        <button type="button" className="btn btn-light"><i class="far fa-comment"></i> Chat</button>
                        <button type="button" className="btn btn-light"><i class="far fa-bell"></i> Notification</button>
                        <Avatar changeUser={changeUser} userDetails={userDetails} />



                        <button onClick={sellingPage} type="button" className="btn btn-dark">New Admin</button>
                    </div>
                </div>
            </nav>
        </>
    )
}