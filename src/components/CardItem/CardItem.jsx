import propTypes from "prop-types";
import { useEffect, useState, useRef } from "react";
import Button from "../Button/Button";
import classes from "./CardItem.module.scss";

export default function CardItem(props) {
    const [displayTranslation, setTranslation] = useState(false);
    const buttonRef = useRef(null);

    const handleShowTranslation = () => {
        setTranslation(!displayTranslation)
        props.increaseStudiedWords()
    }

    const handleHideTranslation = () => {
        setTranslation(!displayTranslation)
    }

    useEffect(() => {
        setTranslation(false)
        if (buttonRef.current) {
            buttonRef.current.focus();
        }
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
                onClick={handleShowTranslation}
                buttonRef={buttonRef}
            />
            <CardContent
                typeCard={displayTranslation ? classes["card--front"] : classes["card--back"]}
                cardWord={props.translation}
                buttonAction="Назад"
                onClick={handleHideTranslation}
            />

        </div>
    );
}

function CardContent(props) {
    return (
        <div
            className={`${classes.card} ${props.typeCard}`}
        >
            <p className={classes.text}>
                {props.cardWord}
            </p>
            <Button
                type="confirm"
                action={props.buttonAction}
                onClick={props.onClick}
                ref={props.buttonRef}
            />
        </div>
    )
}

CardItem.propTypes = {
    word: propTypes.string,
    translation: propTypes.string,
    updateCard: propTypes.bool,
    action: propTypes.string,
    active: propTypes.bool,
    increaseStudiedWords: propTypes.func
};

CardContent.propTypes = {
    typeCard: propTypes.string,
    cardWord: propTypes.string,
    buttonAction: propTypes.string,
    onClick: propTypes.func,
    buttonRef: propTypes.object
};
