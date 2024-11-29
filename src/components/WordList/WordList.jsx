import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import WordListItem from "../WordListItem/WordListItem";
import NewWord from "../NewWord/NewWord";
import wordsJson from "../../data/words.json";
import classes from "./WordList.module.scss";
import Button from "../Button/Button";

export default function WordList() {
    const { topicId } = useParams()

    const [topicName, setTopicName] = useState(topicId)
    const [topicNameInput, setTopicNameInput] = useState('')
    const [errorTopicName, setErrorTopicName] = useState(false)
    const navigate = useNavigate();
    const [words, setWords] = useState(
        wordsJson.filter((item) => item.tags === topicName)
    )
    useEffect(() => {
        setTopicName(topicId)
        setWords(wordsJson.filter(item => item.tags === topicId))
    }, [topicId])


    const getIsTopicNameFilled = () => {
        return ((topicName === 'new' && topicNameInput) || (topicName !== 'new'))
            ? true
            : false

    }

    const handleTopicNameInput = (evt) => {
        setTopicNameInput(evt.target.value.trim())
        setErrorTopicName(false)
    }

    const handleDelete = (id) => {
        setWords(words.filter((item) => item.id !== id))
        console.log('Слово удалено')
    }

    const handleEdit = (id, newWord, newTranslation) => {
        setWords(words.map((item) => {
            if (item.id === id) {
                item.german = newWord
                item.russian = newTranslation
            }
            return item
        }))
        console.log('Слово отредактировано', words.filter((item) => item.id === id)[0])

    }
    const handleAddition = (word, translation) => {
        if (!getIsTopicNameFilled()) {
            setErrorTopicName(true)
            return
        }
        if (word && translation) {
            if (topicName === 'new') setTopicName(topicNameInput)
            const newWordInfo = {
                "id": Date.now(),
                "german": word,
                "russian": translation,
                "tags": topicName,
                "tags_json": "[??]"
            }
            setWords([...words, newWordInfo])
            console.log('Слово добавлено', newWordInfo)
        }
    }

    const handleClickTrainig = () => {
        navigate(`/game/${topicName}`);
    };

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
                    disabled={words.length === 0}
                    onClick={handleClickTrainig}
                />
            </div>
            <section className={classes.list}>
                <div className={classes.titles}>
                    <h2 className={classes.title}>Слово</h2>
                    <h2 className={classes.title}>Перевод</h2>
                    <h2 className={classes.title}>Редактирование</h2>
                </div>
                <NewWord isTopicNameFilled={getIsTopicNameFilled()} handleAddition={handleAddition} />
                <div className={classes.content}>
                    {
                        words.slice().reverse().map((item) => {
                            return (
                                <WordListItem
                                    key={item.id}
                                    id={item.id}
                                    word={item.german}
                                    translation={item.russian}
                                    handleDelete={handleDelete}
                                    handleEdit={handleEdit}
                                />
                            );
                        })
                    }
                </div>
            </section>
        </>
    );
}

