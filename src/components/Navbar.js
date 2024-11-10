import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import {Link} from "react-router-dom"
// use routes for if you are using <link> instead of <a> 
// render because we are extending component
class Navbar extends Component{
    state = {clicked: false}
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked }); 
    };
    
    render(){
        return(
          <nav className="NavbarItems">
            <h1 className="navbar-logo">Trippy</h1>
            <div className="menu-icons" onClick={this.handleClick}><i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i></div>

            <ul className={this.state.clicked ? "nav-menu active" : "nav-menu" }>
                {MenuItems.map((item, index) =>{
                    return(
                        <li key={index}>
                        <Link className = {item.cName} to={item.url}> <i className={item.icon}></i> {item.title}</Link>
                    </li>
                    )
                })}
                <button> <Link to="/signup" className="register"> Sign Up </Link></button>
            </ul>
          </nav>  
        )
    }
}

export default Navbar;