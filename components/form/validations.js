import * as Yup from "yup";

export const LoginValidation = Yup.object().shape({
    name: Yup.string().required('لطفا ایمیل یا موبایل را وارد نمایید.'),
    password: Yup.string().required('لطفا رمز عبور را وارد نمایید.'),
});
