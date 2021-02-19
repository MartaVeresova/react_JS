import React from 'react';
import s from './NavbarName.module.css';
import {NavLink} from "react-router-dom";


const NavbarName = (props) => {
    return (
        <div className={s.item}>
            <NavLink to={props.path} activeClassName={s.activeLink}>{props.name}</NavLink>
        </div>
    )
}

export default NavbarName;
