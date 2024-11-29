import wordsJson from "../../data/words.json";
import CardSlider from "../../components/CardSlider/CardSlider";
import Button from "../../components/Button/Button";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import classes from "./BrowsingWordsPage.module.scss"

export default function BrowsingWordsPage() {
    const { topicId } = useParams()
    const navigate = useNavigate();

    const [isSliderVisible, setDisplaySlider] = useState(true)
    const [studiedWords, setStudiedWords] = useState([])
    const cards = getWordList(topicId)

    function getWordList(topic) {
        return wordsJson.filter((word) => word.tags === topic)
    };

    const handleView = () => {
        setDisplaySlider(true)
    }

    const handleChangeTopic = () => {
        navigate(`/topics`);
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

