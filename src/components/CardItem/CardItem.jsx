import propTypes from "prop-types";
import Button from "../Button/Button";
import classes from "./CardItem.module.scss";
import { useState } from "react";

export default Card;

function Card(props) {
    const [display, setDisplay] = useState(false);

    const handleDisplay = () => {
        setDisplay(!display)
    }

    return (
        <div className={classes.card}>
            <div className={classes.card__content}>
                <p className={`${classes.card__text} ${display && classes["card__text--hidden"]}`}>{props.word}</p>
                <p className=
                    {`${classes.card__text} ${!display && classes["card__text--hidden"]}`}>
                    {props.translation}
                </p>
                <Button type='confirm' action="Показать перевод" onClick={handleDisplay} />
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
