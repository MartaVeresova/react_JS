import s from './Navbar.module.css';
import NavbarName from "./NavbarName/NavbarName";

//{`${s.item} ${s.active}`}  __for Messages

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <NavbarName path='/profile' name='Profile'/>
                <NavbarName path='/dialogues' name='Messages'/>
                <NavbarName path='/news' name='News'/>
                <NavbarName path='/music' name='Music'/>
            </div>
            <div className={s.settings}>
                <NavbarName path='/settings' name='Settings'/>
            </div>
        </nav>
    )
}

export default Navbar;


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
            </div>*/
}