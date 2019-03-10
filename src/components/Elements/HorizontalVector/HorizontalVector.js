import React from 'react';
import styles from './HorizontalVector.module.css';

let HorizontalVector = props => <div className={styles.horizontalLayout}>{props.children}</div>;

export default HorizontalVector;