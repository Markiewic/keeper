import React from 'react';
import styles from './Separator.module.css';

let Separator = props => (
    <div className={styles.separator}>
        <hr className={styles.line} />
        {props.label && <div className={styles.labelWrapper}>
            <span className={styles.label}>{props.label}</span>
        </div>}
    </div>
);

export default Separator;