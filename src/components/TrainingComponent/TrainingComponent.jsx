import classes from "./TrainingComponent.module.scss"
import wordsJson from "../../data/words.json"
import { useParams } from "react-router-dom";
import CardItem from "../CardItem/CardItem";
import Button from "../Button/Button";
import { useState } from "react";

export default function TrainingComponent() {
    const [curIndex, setCurIndex] = useState(0)
    const [updateCard, setUpdateCard] = useState(false)
    const [isNextCard, setIsNextCard] = useState(true)
    const [knownQuantity, setKnownQuantity] = useState(0)
    const [repeatQuantity, setRepeatQuantity] = useState(0)
    const [studyQuantity, setStudyQuantity] = useState(0)

    const getWordList = (topic) => {
        return wordsJson.filter((word) => word.tags === topic)
    };

    const setNewStates = ()=>{
        setCurIndex(curIndex + 1)
        setUpdateCard(!updateCard)
        if (curIndex + 1 === cards.length) {
            setIsNextCard(false)
        }
    }
    const { topicName } = useParams()

    const cards = getWordList(topicName)

    const handleKnownButton = () => {
        setNewStates()
        setKnownQuantity(knownQuantity + 1)
    }

    const handleRepeatButton = () => {
        setNewStates()
        setRepeatQuantity(repeatQuantity + 1)
    }

    const handleStudyButton = () => {
        setNewStates()
        setStudyQuantity(studyQuantity + 1)
    }

    const setAction = (tempIndex) => {
        if (curIndex === 0)
            return ''
        if (curIndex === tempIndex)
            return 'in-bottom'
        if (tempIndex - 1 === curIndex || tempIndex + 1 === curIndex)
            return 'out-bottom'

        return ''
    }

    return (
        isNextCard
            ?
            < div className={classes.content} >
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
                                    className={classes.card}
                                />
                            )
                        })
                    }
                </div>
                < div className={classes.buttons}>
                    <Button
                        type="delete"
                        action={studyQuantity ? `Нужно выучить ( ${studyQuantity} )` : `Нужно выучить`}
                        onClick={handleStudyButton}
                    />
                    <Button
                        type="confirm"
                        action={knownQuantity ? `Знаю ( ${knownQuantity} )` : `Знаю`}
                        onClick={handleKnownButton}
                    />
                    <Button
                        type="edit"
                        action={repeatQuantity ? `Нужно повторить ( ${repeatQuantity} )` : `Нужно повторить`}
                        onClick={handleRepeatButton}
                    />
                </div>
            </div >
            :
            < div className={classes.content} >
                <h2 className={classes.title}>
                    Тренировка завершена!
                </h2>
                <div className={classes.results}>
                    <h3 className={classes.subtitle}>
                        Результаты тренировки:
                    </h3>
                    <p className={classes.text}>
                        Изучено слов: {knownQuantity}
                    </p>
                    <p className={classes.text}>
                        Нужно повторить: {repeatQuantity}
                    </p>
                    <p className={classes.text}>
                        Нужно выучить: {studyQuantity}
                    </p>
                </div>
            </div>
    )
}
