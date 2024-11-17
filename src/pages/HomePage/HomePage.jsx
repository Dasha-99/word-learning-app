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
                <div className={classes["welcome-section__content"]}>
                    <h1 className={classes["welcome-section__title"]}>
                        Изучайте немецкий язык с карточками!
                    </h1>
                    <p className={classes["welcome-section__text"]} >
                        Добро пожаловать на сайт, посвященный изучению немецкого языка с помощью карточек!
                    </p>
                    <p className={classes["welcome-section__text"]} >
                        Здесь вы найдете множество тематических наборов карточек, которые помогут вам легко и эффективно запоминать новые слова и фразы. Изучение языка может быть увлекательным и интересным процессом.
                    </p>
                    <p className={classes["welcome-section__text"]} >
                        Присоединяйтесь, погружайтесь в мир немецкого языка и открывайте для себя новые горизонты! Начните учиться уже сегодня и сделайте шаг к свободному владению немецким!
                    </p>
                    <Button
                        action='Выбрать тему для изучения'
                        onClick={handleClick}
                    />
                </div>
                <div className={classes["welcome-section__photo"]}></div>
            </section>
            <section className={classes.possibilities}>
                <h2 className={classes.possibilities__title}>
                    Возможности
                </h2>
                <ul className={classes.possibilities__list}>
                    <li className={classes["possibilities__list-item"]}>
                        Создание собственных наборов карточек.
                    </li>
                    <li className={classes["possibilities__list-item"]}>
                        Изучение слов по разным темам.
                    </li>
                    <li className={classes["possibilities__list-item"]}>
                        Тренировки для изучения и повторения слов.
                    </li>
                </ul>
            </section>
        </main >
    )
}
