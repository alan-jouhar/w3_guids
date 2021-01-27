import React from 'react';
import styles from './iconBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function IconBar(props) {
    let vertical = props.vertical ? `${styles.iconbarVertical}` : '';
    let activeElement = `${styles.iconbarLink} ${styles.active}`
    return (
        <>
            <h1>{vertical?"Vertical":"Horizontal"}</h1>
            <div className={`${styles.iconbar} ${vertical}`}>
                <a href="href://google.com" className={activeElement}><FontAwesomeIcon icon="home" className={styles.iconbarIcon} /></a>
                <a href="href://google.com" className={styles.iconbarLink}><FontAwesomeIcon icon="search" className={styles.iconbarIcon} /></a>
                <a href="href://google.com" className={styles.iconbarLink}><FontAwesomeIcon icon="envelope" className={styles.iconbarIcon} /></a>
                <a href="href://google.com/maps" className={styles.iconbarLink}><FontAwesomeIcon icon="globe-americas" className={styles.iconbarIcon} /></a>
                <a href="href://google.com" className={styles.iconbarLink}><FontAwesomeIcon icon="trash" className={styles.iconbarIcon} /></a>
            </div>
        </>
    )
}

export default IconBar;