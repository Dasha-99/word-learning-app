import { useParams } from "react-router-dom";
import WordListItem from "../WordListItem/WordListItem";
import NewWord from "../NewWord/NewWord";
import wordsJson from "../../data/words.json";
import classes from "./WordList.module.scss";

export default function WordList() {

    const { id } = useParams()
    const getWords = (topic) => {
        const words = wordsJson.filter((item) => item.tags === topic);

        return words.map((item) => {
            return (
                <WordListItem
                    key={item.id}
                    word={item.german}
                    translation={item.russian}
                />
            );
        });
    };

    return (
        <>

            {
                id !== 'new' ?
                    <h2 className={classes.title}>
                        Слова по теме:
                        <span className={classes["title--addition"]}>
                            {id}
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
                    id !== 'new' &&
                    <div className={classes.content}>
                        {
                            getWords(id)
                        }
                    </div>
                }
            </section>
        </>
    );
}

