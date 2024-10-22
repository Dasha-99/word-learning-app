import propTypes from 'prop-types';
import MenuItem from "../MenuItem/MenuItem"
import classes from "./Header.module.scss";


function Header() {
    return (
        <header className={classes.header}>
            <div className={classes['logo']}>
                <div className={classes['logo__img']}></div>
                <h1 className={classes['logo__title']}>Слова по карточкам</h1>
            </div>
            <nav className={classes.header__navigation}>
                <ul className={classes.header__menu}>
                    <MenuItem title="Список тем" href='../../pages/TopicListPage' />
                    <MenuItem title="Создать список слов" href='#' />
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