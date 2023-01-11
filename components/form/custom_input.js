import { Field, useFormikContext } from 'formik'
import Error_message from './error_message'
import styles from './form.module.css'

export default function CustomInput({ label, name, ...otherProps }) {
    const {
        errors,touched
    } = useFormikContext()
    return (
        <div className={styles.inputContainer}>
            <div className={styles.inputText}>{label}</div>
            <Field
                name = {name}
                className={`${styles.inputValue}  ${errors[name] ? styles.err : ''}`}
                
                {...otherProps}
                
               />
            <Error_message error={errors[name]} visible={touched[name]} />
        </div>
    )
}