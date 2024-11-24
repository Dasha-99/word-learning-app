import propTypes from "prop-types";
import { useState } from "react";
import Button from "../Button/Button";
import classes from "./WordListItem.module.scss";

export default function WordListItem(props) {
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
                className={classes.content}
                value={inputWord}
                onChange={(evt) => { setWord(evt.target.value) }}
            />
            <input
                className={classes.content}
                value={inputTranslation}
                onChange={(evt) => { setTranslation(evt.target.value) }}
            />
            <div className={classes.buttons}>
                <Button
                    type="edit"
                    action="Отменить"
                    onClick={handleState}
                />
                <Button
                    type="confirm"
                    action="Сохранить"
                />
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
            <p className={classes.content}>
                {word}
            </p>
            <p className={classes.content}>
                {translation}
            </p>
            <div className={classes.buttons}>
                <Button
                    type="edit"
                    action="Редактировать"
                    onClick={handleState}
                />
                <Button
                    type="delete"
                    action="Удалить"
                />
            </div>
        </>
    )
}

DisplayWordLine.propTypes = {
    word: propTypes.string,
    translation: propTypes.string,
    handleState: propTypes.func
}