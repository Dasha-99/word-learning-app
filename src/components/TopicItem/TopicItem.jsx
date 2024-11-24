import propTypes from "prop-types";
import Button from "../Button/Button";
import classes from "./TopicItem.module.scss";
import { useNavigate } from "react-router-dom";

export default function TopicItem(props) {

    const navigate = useNavigate();

    const handleClickEdit = () => {
        navigate(`/topics/${props.listName}`);
    };
    const handleClickBrowsing = () => {
        navigate(`/flashcards/${props.listName}`);
    };

    const handleClickTrainig = () => {
        navigate(`/game/${props.listName}`);
    };
    return (
        <div className={classes.line}>
            <p className={classes.content}>{props.listName}</p>
            <p className={classes.content}>{props.quantityCards}</p>
            <div className={`${classes.content} ${classes["content--buttons"]}`}>
                <Button
                    type="edit"
                    action="Редактировать"
                    onClick={handleClickEdit}
                />
                <Button
                    action="Изучить"
                    onClick={handleClickBrowsing}
                />
                <Button
                    type="confirm"
                    action="Тренировать"
                    onClick={handleClickTrainig}
                />
            </div>
        </div >
    );
}

TopicItem.propTypes = {
    listName: propTypes.string,
    quantityCards: propTypes.number,
    date: propTypes.string,
};

