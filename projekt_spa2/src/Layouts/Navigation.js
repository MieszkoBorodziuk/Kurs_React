import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css'

const List = [
    { name: "start", path: "/", exact: true },
    { name: "produkty", path: "/products" },
    { name: "kontakt", path: "/contact" },
    { name: "panel admina", path: "/admin" },
];

const Navigation = () => {

    const menu = List.map(item => (
        <li key={item.name}>
            <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
        </li>
    ))
    return (
        <nav className="main">
            <ul>
                {/* <li>
                    <NavLink to="/">Start</NavLink>
                </li>
                <li>
                    <NavLink to="/product">Produkty</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">kontakt</NavLink>
                </li>
                <li>
                    <NavLink to="/admin">PanelAdmina</NavLink>
                </li> */}
                {menu}
            </ul>
        </nav>
    );
}

export default Navigation;