import Image from "next/image";
import styles from "../styles/login.module.css";
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from "react";

import { CustomInput } from "../components/form/index";
import { LoginValidation } from "../components/form/validations";
import { setInitial, setToken, setUser } from "../redux/userReducer";
import { loginApi } from "../api/userApi";
import { useRouter } from 'next/navigation';


export default function Login() {
    const dispatch = useDispatch();
    const router = useRouter();
    const [errorM, setErrorM] = useState(false)

    // if login page call it logout user 
    useEffect(() => {
        dispatch(setInitial())
    }, [])
    return (
        <Formik
            initialValues={{
                name: '',
                password: '',
            }}

            onSubmit={async (data) => {
                let res = await loginApi(data);
                switch (res.status) {
                    case 200:
                        dispatch(setUser(res.data))
                        dispatch(setToken(res.data.token))
                        router.replace('/')
                        break;
                    case 403:
                        setErrorM('رمز عبور یا نام کاربری اشتباه است.')
                        break;
                    default:
                        break;
                }



            }}

            validationSchema={LoginValidation}
        >

            <div className={styles.container}>
                <div>
                    <h1 className={styles.title}>
                        <Image src="icons/back.png" width="30" height="30" alt="back-icon" />
                        <div>
                            صفحه ورود ادمین مارک گلد
                        </div>
                    </h1>
                </div>

                <Form className={styles.content}>
                    <CustomInput label="آی دی" name="name" type="text" />
                    <CustomInput label="رمز عبور" type="password" name="password" />
                    <button className={styles.button} type="submit">ورود</button>
                </Form>

                {errorM ?
                    <h3 className="text-danger text-bolder mt-3 ">
                        {errorM}
                    </h3>
                    : null
                }
            </div>
        </Formik>
    )
}