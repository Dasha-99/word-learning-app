import classes from "./Header.module.scss";
import { Link } from 'react-router-dom';

export default function Header() {
    const idNewList = 'new'
    return (
        <header className={classes.header}>
            <Link to='/'>
                <div className={classes.logo}>
                    <div className={classes.image}></div>
                    <h1 className={classes.title}>
                        Слова по карточкам
                    </h1>
                </div>
            </Link>
            <nav className={classes.navigation}>
                <Link
                    to='/'
                    className={classes.link}
                >
                    Главная
                </Link>
                <Link
                    to='/topics'
                    className={classes.link}
                >
                    Список тем
                </Link>
                <Link
                    to={`/topics/${idNewList}`}
                    className={classes.link}
                >
                    Создать список слов
                </Link>
            </nav>
        </header >

    )
}
