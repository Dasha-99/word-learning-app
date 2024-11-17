import propTypes from "prop-types";
import classNames from 'classnames';
import classes from "./Button.module.scss"

export default function Button({ type, action, disabled = false, onClick }) {

    const buttonClass = classNames(
        classes.button,
        {
            [classes["button--delete"]]: type === "delete",
            [classes["button--edit"]]: type === "edit",
            [classes["button--confirm"]]: type === "confirm",
            [classes["button--round"]]: type === "round"
        }
    )

    return (
        <button
            className={buttonClass}
            disabled={disabled}
            onClick={onClick}
        >
            {action}
        </button>
    );
}

Button.propTypes = {
    type: propTypes.string,
    action: propTypes.string,
    disabled: propTypes.bool,
    onClick: propTypes.func
};
