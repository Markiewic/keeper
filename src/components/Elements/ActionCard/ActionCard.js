import React, { Component } from 'react';
import Button from '../Button/Button';
import Separator from '../Separator/Separator';
import styles from './ActionCard.module.css';

class ActionCard extends Component {

    render() {
        return (
            <div className={styles.card}>
                <div className={styles.title}>
                    {this.props.title}
                </div>
                <div className={styles.content}>
                    {this.props.children}
                </div>
                <Separator />
                <div className={styles.bottom}>
                    <span className={styles.indicator}>
                        {this.props.indicator}
                    </span>
                    <div className={styles.actions}>
                        {this.props.actions.map((action, index) => <div key={index} className={styles.actionItem}><Button onClick={action.handler}>{action.title}</Button></div>)}
                    </div>
                </div>
            </div>
        );
    }

}

export default ActionCard;