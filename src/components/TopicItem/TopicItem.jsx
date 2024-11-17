import propTypes from "prop-types";
import Button from "../Button/Button";
import classes from "./TopicItem.module.scss";
import { useNavigate } from "react-router-dom";

export default function TopicItem(props) {

    const navigate = useNavigate();

    const handleClickEdit = () => {
        navigate(`/topics/${props.listName}`);
    };
    const handleClickStudy = () => {
        navigate(`/game/${props.listName}`);
    };
    return (
        <div className={classes.line}>
            <p className={classes.line__content}>{props.listName}</p>
            <p className={classes.line__content}>{props.quantityCards}</p>
            {/* <p className={classes.line__content}>{props.date}</p> */}
            <div className={`${classes.line__content} ${classes["line__content--buttons"]}`}>
                <Button
                    type="edit"
                    action="Редактировать"
                    onClick={handleClickEdit}
                />
                <Button
                    action="Изучить"
                    onClick={handleClickStudy}
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

