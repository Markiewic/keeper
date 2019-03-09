import React, { Component } from 'react';
import styles from './Separator.module.css';

class Separator extends Component {

    render() {
        return (
            <div className={styles.separator}>
                <hr className={styles.line} />
                {this.props.label && <div className={styles.labelWrapper}>
                    <span className={styles.label}>{this.props.label}</span>
                </div>}
            </div>
        );
    }

}

export default Separator;