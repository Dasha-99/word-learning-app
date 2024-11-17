import Button from "../../components/Button/Button"
import classes from "./404.module.scss"
import { Link } from "react-router-dom"
export default function NotFoundPage() {
    return (
        <main className="container">
            <div className={classes.content}>
                <div className={classes.content__photo}></div>
                <div className={classes.content__info}>
                    <h1 className={`${classes.content__title} ${classes["content__title--large"]}`}>
                        404
                    </h1>
                    <h2 className={classes.content__title}>
                        Страница не найдена
                    </h2>
                    <Link to='/'>
                        <Button action='Вернуться на главную страницу' />
                    </Link>
                </div>
            </div>
        </main>
    )
}