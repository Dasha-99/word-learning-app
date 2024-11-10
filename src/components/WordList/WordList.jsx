import WordListItem from "../WordListItem/WordListItem";
import NewWord from "../NewWord/NewWord";
import wordsJson from "../../data/words.json";
import classes from "./WordList.module.scss";

export default function WordList() {
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
            <section className={classes.list}>
                <div className={classes.list__titles}>
                    <h2 className={classes.list__title}>Слово</h2>
                    <h2 className={classes.list__title}>Перевод</h2>
                    <h2 className={classes.list__title}>Редактирование</h2>
                </div>
                <NewWord />
                <div className={classes.list__content}>
                    {
                        getWords("Эмоции")
                    }
                </div>
            </section>
        </>
    );
}

