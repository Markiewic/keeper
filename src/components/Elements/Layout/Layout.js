import React from 'react';
import styles from './Layout.module.css';

let Layout = props => <div className={styles.layout}>{props.children}</div>;

export default Layout;