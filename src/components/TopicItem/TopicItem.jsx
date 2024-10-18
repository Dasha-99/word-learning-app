import propTypes from "prop-types";
import Button from "../Button/Button";
import classes from "./TopicItem.module.scss";

function TopicItem(props) {
    return (
        <div className={classes.line}>
            <p className={classes.line__content}>{props.listName}</p>
            <p className={classes.line__content}>{props.quantityCards}</p>
            <p className={classes.line__content}>{props.date}</p>
            <div className={classes.line__content}>
                <Button type="edit" action="Редактировать" />
            </div>
        </div>
    );
}

TopicItem.propTypes = {
    listName: propTypes.string,
    quantityCards: propTypes.number,
    date: propTypes.string,
};

export default TopicItem;
