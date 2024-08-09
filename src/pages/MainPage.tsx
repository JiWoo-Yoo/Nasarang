import { ScrollBox } from '../components/ScrollBox'
import styles from './MainPage.module.css';
export const MainPage = () => {
    return <div className={styles.wrapper}>
    <h1 className={styles.title}>NASARANG</h1> 
    <h1 className={styles.contents}>: Program Using <a href="https://api.nasa.gov/" target='_blank'>NASA API</a></h1>
    <ScrollBox />
    </div>
}