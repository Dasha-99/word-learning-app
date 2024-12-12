import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import WordListItem from "../WordListItem/WordListItem";
import NewWord from "../NewWord/NewWord";
import classes from "./WordList.module.scss";
import Button from "../Button/Button";
import { WordsContext } from "../../context/WordsContext";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

export default function WordList() {
    const { topicId } = useParams()

    const [topicName, setTopicName] = useState(topicId)
    const [topicNameInput, setTopicNameInput] = useState('')
    const [errorTopicName, setErrorTopicName] = useState(false)
    const navigate = useNavigate();

    const { words, loading, error, addWord } = useContext(WordsContext);
    const [filterWords, setFilterWords] = useState(
        words.filter((item) => item.tags === topicName)
    )

    useEffect(() => {
        setFilterWords(words.filter(item => item.tags === topicName))
    }, [words, topicName])


    const isTopicNameFilled = () => {
        return ((topicName === 'new' && topicNameInput) || (topicName !== 'new'))
            ? true
            : false
    }

    const handleTopicNameInput = (evt) => {
        setTopicNameInput(evt.target.value.trim())
        setErrorTopicName(false)
    }

    const handleAddition = (word, translation) => {
        if (!isTopicNameFilled()) {
            setErrorTopicName(true)
            return
        }
        if (word && translation) {
            if (topicName === 'new') setTopicName(topicNameInput)
            const newWordInfo = {
                "id": String(Date.now()),
                "german": word,
                "russian": translation,
                "tags": topicName !== 'new' ? topicName : topicNameInput
            }
            addWord(newWordInfo)
        }
    }

    const handleClickTrainig = () => {
        navigate(`/game/${topicName}`);
    };

    if (loading) {
        return (
            <Loading />
        )
    }
    if (error) {
        return (
            <Error />
        )
    }

    return (
        <>
            <div className={classes.wrapper}>
                {

                    topicName !== 'new' ?
                        <h2 className={classes.title}>
                            Слова по теме:&nbsp;
                            <span className={classes["title--addition"]}>
                                {topicName}
                            </span>
                        </h2>
                        :
                        <div className={classes["input-block"]}>
                            <label>Название списка слов: </label>
                            <input
                                value={topicNameInput}
                                type="text"
                                onChange={handleTopicNameInput}
                                className={`${classes.input} ${errorTopicName && classes.error}`}
                            />
                        </div>
                }
                <Button
                    type="confirm"
                    action="Тренировать"
                    disabled={filterWords.length === 0}
                    onClick={handleClickTrainig}
                />
            </div>
            <section className={classes.list}>
                <div className={classes.titles}>
                    <h2 className={classes.title}>Слово</h2>
                    <h2 className={classes.title}>Перевод</h2>
                    <h2 className={classes.title}>Редактирование</h2>
                </div>
                <NewWord isTopicNameFilled={isTopicNameFilled()} handleAddition={handleAddition} />
                <div className={classes.content}>
                    {
                        filterWords.slice().reverse().map((item) => {
                            return (
                                <WordListItem
                                    key={item.id}
                                    id={item.id}
                                    word={item.german}
                                    translation={item.russian}
                                    tag={topicName}
                                />
                            );
                        })
                    }
                </div>
            </section>
        </>
    );
}

