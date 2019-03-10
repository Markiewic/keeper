import React from 'react';
import { Button, Separator } from '../';
import styles from './ActionCard.module.css';

let ActionCard = props => (
    <div className={styles.card}>
        <div className={styles.title}>
            {props.title}
        </div>
        <div className={styles.content}>
            {props.children}
        </div>
        <Separator />
        <div className={styles.bottom}>
            <span className={styles.indicator}>
                {props.indicator}
            </span>
            <div className={styles.actions}>
                {props.actions.map((action, index) => <div key={index} className={styles.actionItem}><Button onClick={action.handler}>{action.title}</Button></div>)}
            </div>
        </div>
    </div>
);

export default ActionCard;