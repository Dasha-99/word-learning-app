import ListItem from "../TopicItem/TopicItem";
import Button from "../Button/Button";
import classes from "./TopicList.module.scss";
import { useNavigate } from "react-router-dom";
import { WordsContext } from '../../context/WordsContext'
import { useContext } from "react"
import Loading from "../Loading/Loading";
import Error from "../Loading/Loading"

export default function TopicsList() {
    const navigate = useNavigate();
    const { words, loading, error } = useContext(WordsContext);
    const handleClick = () => {
        const idNewList = 'new'
        navigate(`/topics/${idNewList}`);
    };

    const getWordList = () => {
        let wordTopics = {};
        words.forEach(
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
                />
            );
        });
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
        <div className={classes.wrapper}>
            <section className={classes.list}>
                <div className={classes.titles}>
                    <h2 className={classes.title}>Тема</h2>
                    <h2 className={classes.title}>Количество слов</h2>
                </div>
                <div className={classes.content}>
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
        </div>
    );
}

