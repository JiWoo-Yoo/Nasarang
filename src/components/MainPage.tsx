import styles from './MainPage.module.css';
export const MainPage = () => {
    return <div className={styles.wrapper}>
    <h1 className={styles.title}>: Program Using <a href="https://api.nasa.gov/" target='_blank'>NASA API</a></h1>
    <div className={styles.scrollBox}>
        <div className={styles.scrollCommand}>Scroll Down!</div>
        <div className={styles.downArrow}></div>
    </div>
    </div>
}