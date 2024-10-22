import propTypes from "prop-types";
import Button from "../Button/Button";
import classes from "./WordListItem.module.scss";
import { useState } from "react";

export default WordListItem;

function WordListItem(props) {
    const [edit, setEditMode] = useState(false);

    const handleEditMode = () => {
        setEditMode(!edit);
    }

    return (
        <div className={classes.line}>
            {edit
                ?
                < EditWordLine {...props} handleState={handleEditMode} />
                :
                < DisplayWordLine {...props} handleState={handleEditMode} />
            }
        </div>
    );
}

WordListItem.propTypes = {
    word: propTypes.string,
    translation: propTypes.string
};

function EditWordLine(props) {
    const { word, translation, handleState } = props;
    const [inputWord, setWord] = useState(word);
    const [inputTranslation, setTranslation] = useState(translation);
    return (
        <>
            <input
                className={classes.line__content}
                value={inputWord}
                onChange={(evt) => { setWord(evt.target.value) }} />
            <input
                className={classes.line__content}
                value={inputTranslation}
                onChange={(evt) => { setTranslation(evt.target.value) }} />
            <div className={classes.line__buttons}>
                <Button type="edit" action="Отменить" onClick={handleState} />
                <Button type="confirm" action="Сохранить" />
            </div>
        </>
    )
}

EditWordLine.propTypes = {
    word: propTypes.string,
    translation: propTypes.string,
    handleState: propTypes.func
}

function DisplayWordLine(props) {
    const { word, translation, handleState } = props;
    return (
        <>
            <p className={classes.line__content}>{word}</p>
            <p className={classes.line__content}>{translation}</p>
            <div className={classes.line__buttons}>
                <Button type="edit" action="Редактировать" onClick={handleState} />
                <Button type="delete" action="Удалить" />
            </div>
        </>
    )
}

DisplayWordLine.propTypes = {
    word: propTypes.string,
    translation: propTypes.string,
    handleState: propTypes.func
}