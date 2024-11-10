import wordsJson from "../data/words.json";
import CardSlider from "../components/CardSlider/CardSlider";

export default function BrowsingWordsPage() {
    const getWordList = (topic) => {
        return wordsJson.filter((word) => word.tags === topic)
    };

    const cards = getWordList('Семья')

    return (
        <CardSlider cards={cards} />
    );
}

