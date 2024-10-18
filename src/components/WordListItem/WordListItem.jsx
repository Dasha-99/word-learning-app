import propTypes from "prop-types";
import Button from "../Button/Button";
import classes from "./WordListItem.module.scss";

function WordListItem(props) {
    return (
        <div className={classes.line}>
            <p className={`${classes.line__content} ${classes["line__content--foreign"]}`}>
                {props.word}
            </p>
            <p className={classes.line__content}>{props.translation}</p>
            <div className={classes.line__buttons}>
                <Button type="edit" action="Редактировать" />
                <Button type="delete" action="Удалить" />
            </div>
        </div>
    );
}

WordListItem.propTypes = {
    word: propTypes.string,
    translation: propTypes.string,
};

export default WordListItem;
