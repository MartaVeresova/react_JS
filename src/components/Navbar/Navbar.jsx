import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

//{`${s.item} ${s.active}`}  __for Messages

const NavbarMenu = (props) => {
    return (
        <div className={s.item}>
            <NavLink to={props.path} activeClassName={s.activeLink}>{props.name}</NavLink>
        </div>
    )
}

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <NavbarMenu path='/profile' name='Profile'/>
            <NavbarMenu path='/dialogues' name='Messages'/>
            <NavbarMenu path='/news' name='News'/>
            <NavbarMenu path='/music' name='Music'/>
            <NavbarMenu path='/settings' name='Settings'/>

            {/*<div className={s.item}>
                <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogues' activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
            </div>*/}
        </nav>
    )
}

export default Navbar;