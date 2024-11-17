import ListItem from "../TopicItem/TopicItem";
import Button from "../Button/Button";
import wordsJson from "../../data/words.json";
import classes from "./TopicList.module.scss";
import { useNavigate } from "react-router-dom";

export default function TopicsList() {
    const navigate = useNavigate();

    const handleClick = () => {
        const idNewList = 'new'
        navigate(`/topics/${idNewList}`);
    };

    const getWordList = () => {
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
                    key={key}
                    listName={key}
                    quantityCards={wordTopics[key]}
                // date="03.10.2024"
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
                    {/* <h2 className={classes.list__title}>Дата создания</h2> */}
                    {/* <h2 className={classes.list__title}>Редактирование</h2> */}
                </div>
                <div className={classes.list__content}>
                    {
                        getWordList()
                    }
                </div>
            </section>
            <Button
                type="ordinary"
                action="Создать новый список"
                onClick={handleClick}
            />
        </>
    );
}

