import propTypes from "prop-types";
import classNames from 'classnames';
import classes from "./Button.module.scss"
import { forwardRef } from "react";

const Button = forwardRef(function Button(props, ref) {
    const { type, action, disabled = false, onClick } = props
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
            ref={ref}
        >
            {action}
        </button>
    );
}
)

export default Button

Button.propTypes = {
    type: propTypes.string,
    action: propTypes.string,
    disabled: propTypes.bool,
    onClick: propTypes.func
};
