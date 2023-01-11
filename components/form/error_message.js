import styles from './form.module.css'
 

export default function ErrorMessage({ error, visible }){
    if (!visible || !error) return null;
    return <div className={styles.error}>{error}</div>;
};