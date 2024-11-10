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
            <div
                className={`${classes.card} 
                    ${!displayTranslation ? classes["card--front"] : classes["card--back"]}`}
            >
                <p className={classes.card__text}>
                    {props.word}
                </p>
                <Button
                    type="confirm"
                    action="Показать перевод"
                    onClick={handleTranslation}
                />
            </div>
            <div
                className={`${classes.card} 
                    ${displayTranslation ? classes["card--front"] : classes["card--back"]}`}
            >
                <p className={classes.card__text}>
                    {props.translation}
                </p>
                <Button
                    type="confirm"
                    action="Назад"
                    onClick={handleTranslation}
                />
            </div>
        </div>

        // < div className={classes.card} >
        //     <div className={classes.card__content}>
        //         <p className={`${classes.card__text} ${displayTranslation && classes["card__text--hidden"]}`}>{props.word}</p>
        //         <p className=
        //             {`${classes.card__text} ${!displayTranslation && classes["card__text--hidden"]}`}>
        //             {props.translation}
        //         </p>
        //         <Button type="confirm" action="Показать перевод" onClick={handleTranslation} />
        //     </div>
        //     <div className={classes.card__buttons}>
        //         <Button type="confirm" action="Знаю" />
        //         <Button type="edit" action="Нужно повторить" />
        //         <Button type="delete" action="На изучение" />
        //     </div>
        // </div >
    );
}

CardItem.propTypes = {
    word: propTypes.string,
    translation: propTypes.string,
    updateCard: propTypes.bool,
    action: propTypes.string,
    active: propTypes.bool
};
