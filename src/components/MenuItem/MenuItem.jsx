import propTypes from 'prop-types';
import classes from "./MenuItem.module.scss";

function MenuItem(props) {
    return (
        <li className={classes['menu-item']}>
            <a className={classes['menu-item__link']} href="#">{props.title}</a>
        </li>
    )
}

MenuItem.propTypes ={
    title:propTypes.string
}

export default MenuItem;