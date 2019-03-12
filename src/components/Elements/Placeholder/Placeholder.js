import React from 'react';
import styles from './Placeholder.module.css';

let Placeholder = (props) => (
    <div className={styles.placeholder}>
        <div className={styles.head}>{props.children}</div>
        <div className={styles.label}>{props.label}</div>
        <div className={styles.description}>{props.description}</div>
    </div>
);

export default Placeholder;