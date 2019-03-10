import React from 'react';
import styles from './VerticalVector.module.css';

let VerticalVector = props => <div className={styles.verticalLayout}>{props.children}</div>;

export default VerticalVector;