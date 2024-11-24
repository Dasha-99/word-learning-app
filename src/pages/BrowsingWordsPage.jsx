import wordsJson from "../data/words.json";
import CardSlider from "../components/CardSlider/CardSlider";
import { useParams } from "react-router-dom";

export default function BrowsingWordsPage() {
    const getWordList = (topic) => {
        return wordsJson.filter((word) => word.tags === topic)
    };

    const { topicName } = useParams()

    const cards = getWordList(topicName)
    return (
        <main className="container">
            <CardSlider cards={cards} />
        </main>
    );
}

