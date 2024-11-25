import { useParams } from "react-router-dom";
import { useState } from "react";
import WordListItem from "../WordListItem/WordListItem";
import NewWord from "../NewWord/NewWord";
import wordsJson from "../../data/words.json";
import classes from "./WordList.module.scss";

export default function WordList() {
    const { topicName } = useParams()

    const [words, setWords] = useState(
        wordsJson.filter((item) => item.tags === topicName)
    )

    const handleDelete = (id) => {
        setWords(words.filter((item) => item.id !== id))
    }

    const handleEdit = (id, newWord, newTranslation) => {
        setWords(words.map((item) => {
            if (item.id === id) {
                item.german = newWord
                item.russian = newTranslation
            }
            return item
        }))
    }

    return (
        <>

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
                            type="text"
                            className={classes.input}
                        />
                    </div>
            }
            <section className={classes.list}>
                <div className={classes.titles}>
                    <h2 className={classes.title}>Слово</h2>
                    <h2 className={classes.title}>Перевод</h2>
                    <h2 className={classes.title}>Редактирование</h2>
                </div>
                <NewWord />
                {
                    topicName !== 'new' &&
                    <div className={classes.content}>
                        {
                            words.map((item) => {
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
                }
            </section>
        </>
    );
}

