import propTypes from "prop-types";
import classes from "./Button.module.scss";

function Button(props) {
    return (
        <button
            className={`${classes.button} 
                ${props.type === "delete" && classes["button--delete"]} 
                ${props.type === "edit" && classes["button--edit"]}
                ${props.type === "confirm" && classes["button--confirm"]}`}
        >
            {props.action}
        </button>
    );
}

Button.propTypes = {
    type: propTypes.string,
    action: propTypes.string,
};

export default Button;