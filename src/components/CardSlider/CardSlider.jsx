import propTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import CardItem from "../CardItem/CardItem";
import classes from "./CardSlider.module.scss";

export default function CardSlider({ cards, indexCard = 0 }) {
    const [index, setIndex] = useState(indexCard)
    const [updateCard, setUpdateCard] = useState(false)
    const [isSliderVisible, setDisplaySlider] = useState(true)
    const [direction, setDirection] = useState('');
    const navigate = useNavigate();

    const handleNextCard = () => {
        if (index + 1 === cards.length) {
            setDisplaySlider(false)
        }
        else {
            setIndex(index + 1)
            setDirection('left')
        }
        setUpdateCard(!updateCard)
    }

    const handlePreviousCard = () => {
        if (index === 0) {
            setIndex(cards.length - 1)
        }
        else {
            setIndex(index - 1)
            setDirection('right')
        }
        setUpdateCard(!updateCard)
    }

    const handleView = () => {
        setIndex(0)
        setDisplaySlider(true)
    }

    const setAction = (curIndex) => {
        if (index === curIndex && direction)
            return 'in-' + direction
        if (curIndex - 1 === index && direction === 'right')
            return 'out-right'
        if (curIndex + 1 === index && direction === 'left')
            return 'out-left'

        return ''
    }
    const handleChangeTopic = () => {
        navigate(`/topics`);
    }

    return (
        isSliderVisible
            ?
            <section className={classes.slider}>
                <div className={classes.slider__content}>
                    <Button
                        type="round"
                        action="←"
                        disabled={index === 0}
                        onClick={handlePreviousCard}
                    />
                    <div className={classes.slider__cards}>
                        {
                            cards.map((item, itemIndex) => {
                                return (
                                    <CardItem
                                        key={item.id}
                                        word={item["german"]}
                                        translation={item["russian"]}
                                        updateCard={updateCard}
                                        action={setAction(itemIndex)}
                                        active={itemIndex === index}
                                    />
                                )
                            })
                        }
                    </div>
                    <Button
                        type="round"
                        action="→"
                        onClick={handleNextCard}
                    />
                </div>
                <span className={classes.slider__text}>
                    {index + 1}/{cards.length}
                </span>
            </section>
            :
            <section className={classes.message}>
                <p className={classes.message__content}>
                    Вы изучили весь список слов
                </p>
                <div className={classes.message__buttons}>
                    <Button
                        type="confirm"
                        action="Просмотреть список слов заново"
                        onClick={handleView}
                    />
                    <Button
                        action="Выбрать другой список слов"
                        onClick={handleChangeTopic}
                    />
                </div>
            </section>

    )
}

CardSlider.propTypes = {
    cards: propTypes.array,
    indexCard: propTypes.number
};

