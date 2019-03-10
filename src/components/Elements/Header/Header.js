import React from 'react';
import { Layout } from '../';
import styles from './Header.module.css';

let Header = props => (
    <div className={styles.header}>
        <Layout>
            <span className={styles.title}>
                {props.children}
            </span>
        </Layout>
    </div>
);

export default Header;