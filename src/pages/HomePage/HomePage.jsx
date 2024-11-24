import Button from "../../components/Button/Button";
import classes from "./HomePage.module.scss"
import { useNavigate } from "react-router-dom";

export default function HomePage() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/topics`);
    };


    return (
        <main className="container">
            <section className={classes["welcome-section"]}>
                <div className={classes.content}>
                    <h1 className={classes.title}>
                        Изучайте немецкий язык с карточками!
                    </h1>
                    <p className={classes.text} >
                        Добро пожаловать на сайт, посвященный изучению немецкого языка с помощью карточек!
                    </p>
                    <p className={classes.text} >
                        Здесь вы найдете множество тематических наборов карточек, которые помогут вам легко и эффективно запоминать новые слова и фразы. Изучение языка может быть увлекательным и интересным процессом.
                    </p>
                    <p className={classes.text} >
                        Присоединяйтесь, погружайтесь в мир немецкого языка и открывайте для себя новые горизонты! Начните учиться уже сегодня и сделайте шаг к свободному владению немецким!
                    </p>
                    <Button
                        action='Выбрать тему для изучения'
                        onClick={handleClick}
                    />
                </div>
                <div className={classes.image}></div>
            </section>
            <section className={classes.possibilities}>
                <h2 className={classes.title}>
                    Возможности
                </h2>
                <ul className={classes.list}>
                    <li className={classes["list-item"]}>
                        Создание собственных наборов карточек.
                    </li>
                    <li className={classes["list-item"]}>
                        Изучение слов по разным темам.
                    </li>
                    <li className={classes["list-item"]}>
                        Тренировки для изучения и повторения слов.
                    </li>
                </ul>
            </section>
        </main >
    )
}
