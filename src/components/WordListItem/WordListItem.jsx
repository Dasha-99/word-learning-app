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
    id: propTypes.number,
    word: propTypes.string,
    translation: propTypes.string,
    handleDelete: propTypes.func,
    handleEdit: propTypes.func
};

function EditWordLine(props) {
    const [inputWord, setWord] = useState(props.word);
    const [inputTranslation, setTranslation] = useState(props.translation);

    const handleSave = (id, newWord, newTranslation) => {
        props.handleEdit(id, newWord, newTranslation)
        props.handleState()
    }
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
                    onClick={props.handleState}
                />
                <Button
                    type="confirm"
                    action="Сохранить"
                    onClick={() => { handleSave(props.id, inputWord, inputTranslation) }}
                />
            </div>
        </>
    )
}

EditWordLine.propTypes = {
    id: propTypes.number,
    word: propTypes.string,
    translation: propTypes.string,
    handleEdit: propTypes.func,
    handleState: propTypes.func
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
    id: propTypes.number,
    word: propTypes.string,
    translation: propTypes.string,
    handleDelete: propTypes.func,
    handleState: propTypes.func
}