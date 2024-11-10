import Button from "../Button/Button";
import classes from "./NewWord.module.scss";

export default function NewWord() {
    return (
        <form
            className={classes.form}
            name="AddWordForm">
            <input
                className={classes.form__input}
                type="text"
                placeholder="Новое слово"
            />
            <input
                className={classes.form__input}
                type="text"
                placeholder="Перевод"
            />
            <Button
                type="ordinary"
                action="Добавить новое слово"
            />
        </form>
    );
}

