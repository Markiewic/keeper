import React from 'react';
import styles from './Button.module.css';

let Button = props => (
    <button className={styles.button} {...props}>{props.children}</button>
);

export default Button;