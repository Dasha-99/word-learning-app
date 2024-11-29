import propTypes from "prop-types";
import { useEffect, useState, useRef } from "react";
import Button from "../Button/Button";
import classes from "./CardItem.module.scss";

export default function CardItem({
    word, translation, action, active, increaseStudiedWords = () => { }
}) {
    const [displayTranslation, setTranslation] = useState(false);
    const buttonRef = useRef(null);

    const handleShowTranslation = () => {
        setTranslation(!displayTranslation)
        increaseStudiedWords()
    }

    const handleHideTranslation = () => {
        setTranslation(!displayTranslation)
    }
    useEffect(() => {
        setTranslation(false)
        if (buttonRef.current && active) {
            buttonRef.current.focus();
        }
    }, [active]);

    return (
        < div
            className={`${classes["card-container"]} 
                ${active && classes["card-container--active"]} 
                ${action && classes["card-container--" + action]}`}
        >
            <CardContent
                typeCard={!displayTranslation ? classes["card--front"] : classes["card--back"]}
                cardWord={word}
                buttonAction="Показать перевод"
                onClick={handleShowTranslation}
                buttonRef={buttonRef}
            />
            <CardContent
                typeCard={displayTranslation ? classes["card--front"] : classes["card--back"]}
                cardWord={translation}
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
