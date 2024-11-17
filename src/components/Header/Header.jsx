import propTypes from 'prop-types';
import classes from "./Header.module.scss";
import { Link } from 'react-router-dom';

export default function Header() {
    const idNewList = 'new'
    return (
        <header className={classes.header}>
            <Link to='/'>
                <div className={classes['logo']}>
                    <div className={classes['logo__img']}></div>
                    <h1 className={classes['logo__title']}>
                        Слова по карточкам
                    </h1>
                </div>
            </Link>
            <nav className={classes.header__navigation}>
                <Link
                    to='/'
                    className={classes.header__link}
                >
                    Главная
                </Link>
                <Link
                    to='/topics'
                    className={classes.header__link}
                >
                    Список слов
                </Link>
                <Link
                    to={`/topics/${idNewList}`}
                    className={classes.header__link}
                >
                    Создать список слов
                </Link>
            </nav>
        </header >

    )
}

Header.propTypes = {
    titleFirst: propTypes.string,
    titleSecond: propTypes.string
}
