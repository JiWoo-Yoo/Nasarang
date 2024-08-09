import styles from './ScrollBox.module.css';
export const ScrollBox = () => {
    return (
        <div className={styles.scrollBox}>
        <div className={styles.scrollCommand}>Scroll Down!</div>
        <div className={styles.downArrow}></div>
    </div>
    )
}
