import propTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import CardItem from "../CardItem/CardItem";
import classes from "./CardSlider.module.scss";

export default function CardSlider({ cards, indexCard = 0 }) {
    const [curIndex, setCurIndex] = useState(indexCard)
    const [updateCard, setUpdateCard] = useState(false)
    const [isSliderVisible, setDisplaySlider] = useState(true)
    const [direction, setDirection] = useState('');
    const [studiedWords, setStudiedWords] = useState([])
    const navigate = useNavigate();

    const handleNextCard = () => {
        if (curIndex + 1 === cards.length) {
            setDisplaySlider(false)
        }
        else {
            setCurIndex(curIndex + 1)
            setDirection('left')
        }
        setUpdateCard(!updateCard)
    }

    const handlePreviousCard = () => {
        if (curIndex === 0) {
            setCurIndex(cards.length - 1)
        }
        else {
            setCurIndex(curIndex - 1)
            setDirection('right')
        }
        setUpdateCard(!updateCard)
    }

    const handleView = () => {
        setCurIndex(0)
        setDisplaySlider(true)
    }
 
    const setAction = (tempIndex) => {
        if (curIndex === tempIndex && direction)
            return 'in-' + direction
        if (tempIndex - 1 === curIndex && direction === 'right')
            return 'out-right'
        if (tempIndex + 1 === curIndex && direction === 'left')
            return 'out-left'

        return ''
    }
    
    const handleChangeTopic = () => {
        navigate(`/topics`);
    }

    const increaseStudiedWords = () => {
        const isFoundItem = studiedWords.find(item => item === cards[curIndex].id);
        if (!isFoundItem)
            setStudiedWords([...studiedWords, cards[curIndex].id])
    }

    return (
        isSliderVisible
            ?
            <section className={classes.slider}>
                <div className={classes.content}>
                    <Button
                        type="round"
                        action="←"
                        disabled={curIndex === 0}
                        onClick={handlePreviousCard}
                    />
                    <div className={classes.cards}>
                        {
                            cards.map((item, itemIndex) => {
                                return (
                                    <CardItem
                                        key={item.id}
                                        word={item["german"]}
                                        translation={item["russian"]}
                                        updateCard={updateCard}
                                        action={setAction(itemIndex)}
                                        active={itemIndex === curIndex}
                                        increaseStudiedWords={increaseStudiedWords}
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
                <span className={classes.text}>
                    Изучено слов: {studiedWords.length}/{cards.length}
                </span>
            </section>
            :
            <section className={classes.message}>
                <p className={classes.text}>
                    Вы просмотрели весь список слов
                </p>
                <div className={classes.buttons}>
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

