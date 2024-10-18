import propTypes from "prop-types";
import Button from "../Button/Button";
import classes from "./CardItem.module.scss";

function Card(props) {
    return (
        <div className={classes.card}>
            <div className={classes.card__content}>
                <p className={classes.card__text}>{props.word}</p>
                <p className=
                    {`${classes.card__text} ${classes["card__text--translation"]}`}>
                    {props.translation}
                </p>
            </div>
            <div className={classes.card__buttons}>
                <Button type="confirm" action="Знаю" />
                <Button type="edit" action="Нужно повторить" />
                <Button type="delete" action="На изучение" />
            </div>
        </div>
    );
}

Card.propTypes = {
    word: propTypes.string,
    translation: propTypes.string,
};

export default Card;
