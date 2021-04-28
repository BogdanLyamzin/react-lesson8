import React, {Component} from "react";

import HomePage from "../../../Home/pages/HomePage";
import AboutPage from "../../../About/pages/aboutPage";
import ContactsPage from "../../../Contacts/pages/ContactsPage";
import NavbarMenuItem from "../NavbarMenuItem";

import "./Navbar.css";

import {menuItems} from "./menuItems";

class Navbar extends Component {
    state = {
        currentPage: <HomePage />
    }

    handleClick = (e)=> {
        e.preventDefault();
        let newPage = "";
        const path = e.target.href.split("/").pop();
        switch(path){
            case "home":
                newPage = <HomePage />;
                break;
            case "about":
                newPage = <AboutPage />;
                break;
            case "contacts":
                newPage = <ContactsPage />;
                break;
        }
        this.setState({
            currentPage: newPage
        })
    }


    render(){
        const {currentPage} = this.state;
        const {handleClick} = this;
        const navbarMenuElements = menuItems.map(item => <NavbarMenuItem handleClick={handleClick} {...item} />);

        return (
            <>
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-row">
                        <ul className="navbar-menu">
                            {navbarMenuElements}
                        </ul>
                    </div>
                </div>
            </nav>
                {currentPage}
            </>
        )
    }

}

export default Navbar;

