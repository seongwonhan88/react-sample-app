import React from 'react';
import styles from './Toggle.module.css'

const toggle = (props) => (
    <div className={styles.Toggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default toggle;