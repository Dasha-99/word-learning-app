import propTypes from 'prop-types';
import MenuItem from "../MenuItem/MenuItem"
import classes from "./Header.module.scss";

function Header(props) {
    return (
        <header className={classes.header}>
            <div className={classes['logo']}>
                <div className={classes['logo__img']}></div>
                <h1 className={classes['logo__title']}>Слова по карточкам</h1>
            </div>
            <nav className={classes.header__navigation}>
                <ul className={classes.header__menu}>
                    <MenuItem title={props.titleFirst} />
                    <MenuItem title={props.titleSecond} />
                </ul>
            </nav>
        </header>
    )
}

Header.propTypes = {
    titleFirst: propTypes.string,
    titleSecond: propTypes.string
}

export default Header;