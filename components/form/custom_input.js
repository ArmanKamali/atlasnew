import { Field, useFormikContext } from "formik";
import Error_message from "./error_message";
import styles from "./form.module.css";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
export default function CustomInput({
    label,
    name,
    setShowPassword,
    icon = null,
    ...otherProps
}) {
    const { errors, touched } = useFormikContext();
    return (
        <div className={styles.inputContainer}>
            <div className={styles.inputText}>
                {label}
                {icon ?
                    <>
                    <>
                        {icon === "eye" ? <AiFillEye onClick={()=>{setShowPassword(true) }}/> : null}
                    </>
                        <>
                        {icon === "eye-off" ? <AiFillEyeInvisible onClick={()=>{setShowPassword(false)}}/> : null}
                        </>
                    </>
                    : null}
            </div>
            <Field
                name={name}
                className={`${styles.inputValue}  ${errors[name] ? styles.err : ""}`}
                {...otherProps}
            />
            <Error_message error={errors[name]} visible={touched[name]} />
        </div>
    );
}
