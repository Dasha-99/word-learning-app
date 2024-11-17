import propTypes from "prop-types";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import classes from "./CardItem.module.scss";

export default function CardItem(props) {
    const [displayTranslation, setTranslation] = useState(false);

    const handleTranslation = () => {
        setTranslation(!displayTranslation)
    }

    useEffect(() => {
        setTranslation(false)
    }, [props.updateCard]);

    return (
        < div
            className={`${classes["card-container"]} 
                ${props.active && classes["card-container--active"]} 
                ${props.action && classes["card-container--" + props.action]}`}
        >
            <CardContent
                typeCard={!displayTranslation ? classes["card--front"] : classes["card--back"]}
                cardWord={props.word}
                buttonAction="Показать перевод"
                onClick={handleTranslation}
            />
            <CardContent
                typeCard={displayTranslation ? classes["card--front"] : classes["card--back"]}
                cardWord={props.translation}
                buttonAction="Назад"
                onClick={handleTranslation}
            />

        </div>
    );
}

function CardContent(props) {
    return (
        <div
            className={`${classes.card} ${props.typeCard}`}
        >
            <p className={classes.card__text}>
                {props.cardWord}
            </p>
            <Button
                type="confirm"
                action={props.buttonAction}
                onClick={props.onClick}
            />
        </div>
    )
}

CardItem.propTypes = {
    word: propTypes.string,
    translation: propTypes.string,
    updateCard: propTypes.bool,
    action: propTypes.string,
    active: propTypes.bool
};

CardContent.propTypes = {
    typeCard: propTypes.string,
    cardWord: propTypes.string,
    buttonAction: propTypes.string,
    onClick: propTypes.func
};


{/* <div className={classes.card__buttons}>
        <Button type="confirm" action="Знаю" />
        <Button type="edit" action="Нужно повторить" />
        <Button type="delete" action="На изучение" />
    </div> */}