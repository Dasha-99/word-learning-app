import propTypes from 'prop-types';
import classes from "./MenuItem.module.scss";

export default function MenuItem(props) {
    return (
        <li className={classes['menu-item']}>
            <a className={classes['menu-item__link']} href={props.href}>
                {props.title}
            </a>
        </li>
    )
}

MenuItem.propTypes = {
    href: propTypes.string,
    title: propTypes.string
}
