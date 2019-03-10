import React from 'react';
import styles from './FluidLayout.module.css';

let FluidLayout = props => <div className={styles.fluidLayout}>{props.children}</div>;

export default FluidLayout;