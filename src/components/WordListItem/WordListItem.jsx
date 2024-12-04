import PropTypes from "prop-types";
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
    id: PropTypes.number,
    word: PropTypes.string,
    translation: PropTypes.string,
    handleDelete: PropTypes.func,
    handleEdit: PropTypes.func
};

function EditWordLine(props) {
    const [inputWord, setWord] = useState(props.word)
    const [inputTranslation, setTranslation] = useState(props.translation)
    const [isInputsError, setIsInputsError] = useState(false)

    const handleSave = () => {
        if (inputWord && inputTranslation) {
            props.handleEdit(props.id, inputWord, inputTranslation)
            props.handleState()
        }
        else setIsInputsError(true)
    }
    return (
        <>
            <input
                className={`${classes.content} ${isInputsError && !inputWord && classes.error}`}
                value={inputWord}
                onChange={(evt) => { setWord(evt.target.value.trim()) }}
            />
            <input
                className={`${classes.content} ${isInputsError && !inputTranslation && classes.error}`}
                value={inputTranslation}
                onChange={(evt) => { setTranslation(evt.target.value.trim()) }}
            />
            <div className={classes.buttons}>
                <Button
                    type="edit"
                    action="Отменить"
                    onClick={props.handleState}
                />
                <Button
                    type="confirm"
                    action="Сохранить"
                    onClick={handleSave}
                />
            </div>
        </>
    )
}

EditWordLine.propTypes = {
    id: PropTypes.number,
    word: PropTypes.string,
    translation: PropTypes.string,
    handleEdit: PropTypes.func,
    handleState: PropTypes.func
}

function DisplayWordLine(props) {
    return (
        <>
            <p className={classes.content}>
                {props.word}
            </p>
            <p className={classes.content}>
                {props.translation}
            </p>
            <div className={classes.buttons}>
                <Button
                    type="edit"
                    action="Редактировать"
                    onClick={props.handleState}
                />
                <Button
                    type="delete"
                    action="Удалить"
                    onClick={() => { props.handleDelete(props.id) }}
                />
            </div>
        </>
    )
}

DisplayWordLine.propTypes = {
    id: PropTypes.number,
    word: PropTypes.string,
    translation: PropTypes.string,
    handleDelete: PropTypes.func,
    handleState: PropTypes.func
}