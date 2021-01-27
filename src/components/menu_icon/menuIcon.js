import React, { useRef } from 'react';
import styles from './menuIcon.module.css';
import './helper_styles.css';

function MenuIcon(props) {
    const wrapperRef = useRef(null)

    function menuIconAnimation(e) {
        wrapperRef.current.classList.toggle("change")
    }
    if (props.animated)
        return (
            <div ref={wrapperRef} className={styles.menuWrapper} onClick={menuIconAnimation}>
                <div className={styles.menuDash} id="bar1"></div>
                <div className={styles.menuDash} id="bar2"></div>
                <div className={styles.menuDash} id="bar3"></div>
            </div>
        )
    else return (
        <div ref={wrapperRef} className={styles.menuWrapper}>
            <div className={styles.menuDash} id="bar1"></div>
            <div className={styles.menuDash} id="bar2"></div>
            <div className={styles.menuDash} id="bar3"></div>
        </div>
    )
}

export default MenuIcon;