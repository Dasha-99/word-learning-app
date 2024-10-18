import ListItem from "../TopicItem/TopicItem";
import Button from "../Button/Button";
import classes from "./TopicList.module.scss";
import wordsJson from "../../assets/words.json";

function TopicsList() {
    const getWordLists = () => {
        let wordTopics = {};
        wordsJson.forEach(
            (word) =>
            (wordTopics[word.tags] = wordTopics[word.tags]
                ? (wordTopics[word.tags] += 1)
                : 1)
        );

        return Object.keys(wordTopics).map((key) => {
            return (
                <ListItem
                    key={key} //?//
                    listName={key}
                    quantityCards={wordTopics[key]}
                    date="03.10.2024"
                />
            );
        });
    };

    return (
        <>
            <section className={classes.list}>
                <div className={classes.list__titles}>
                    <h2 className={classes.list__title}>Тема</h2>
                    <h2 className={classes.list__title}>Количество карточек</h2>
                    <h2 className={classes.list__title}>Дата создания</h2>
                    <h2 className={classes.list__title}>Редактирование</h2>
                </div>
                <div className={classes.list__content}>
                    {
                        getWordLists()
                    }
                </div>
            </section>
            <Button type="ordinary" action="Создать новый список" />
        </>
    );
}

export default TopicsList;
