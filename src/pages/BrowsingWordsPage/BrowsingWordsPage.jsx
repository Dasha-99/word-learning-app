import CardSlider from "../../components/CardSlider/CardSlider";
import Button from "../../components/Button/Button";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import classes from "./BrowsingWordsPage.module.scss";
import { WordsContext } from "../../context/WordsContext";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

export default function BrowsingWordsPage() {
    const { topicId } = useParams()
    const navigate = useNavigate();

    const [isSliderVisible, setDisplaySlider] = useState(true)
    const [studiedWords, setStudiedWords] = useState([])

    const { words, loading, error } = useContext(WordsContext);

    const cards = getWordList(topicId)

    function getWordList(topic) {
        return words.filter((word) => word.tags === topic)
    };

    const handleView = () => {
        setDisplaySlider(true)
    }

    const handleChangeTopic = () => {
        navigate(`/topics`);
    }

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
        <main className="container">
            {
                isSliderVisible
                    ?
                    <CardSlider
                        cards={cards}
                        setDisplaySlider={setDisplaySlider}
                        studiedWords={studiedWords}
                        setStudiedWords={setStudiedWords}
                    />
                    :
                    <section className={classes.message}>
                        <p className={classes.text}>
                            Вы просмотрели весь список слов
                        </p>
                        <p className={classes.text}>
                            Изучено слов: {studiedWords.length} из {cards.length}
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
            }
        </main>
    );
}

