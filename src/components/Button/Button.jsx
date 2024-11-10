import propTypes from "prop-types";
import classes from "./Button.module.scss";

export default function Button(props) {
    return (
        <button
            className={`${classes.button} 
                ${props.type === "delete" && classes["button--delete"]} 
                ${props.type === "edit" && classes["button--edit"]}
                ${props.type === "confirm" && classes["button--confirm"]}
                ${props.type === "round" && classes["button--round"]}`}
            disabled={props.disabled}
            onClick={() => props.onClick()}
        >
            {props.action}
        </ button>
    );
}

Button.propTypes = {
    type: propTypes.string,
    action: propTypes.string,
    disabled: propTypes.bool,
    onClick: propTypes.func
};

Button.defaultProps = {
    disabled: false
}

