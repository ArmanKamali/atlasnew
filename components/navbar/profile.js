import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setInitial } from "../../redux/userReducer";
import styles from '../../styles/navbar.module.css'
const Profile = () => {
    // hooks
    const dispatch = useDispatch()
    const router = useRouter();

    // redux
    const user = useSelector(state => state.reducer.user.user_data)
    // functions
    const signOut = () => {
        dispatch(setInitial());
        router.replace('/');
    }
    return (
        <div className={styles.profileContainer}>
            <Image
                alt="user-logo"
                src="/icons/user-icon.svg"
                width="50"
                height="50" />
            <div>{user.name}</div>
            <div>{user.email}</div>
            <button className="btn btn-danger" onClick={signOut}>خروج</button>
            <hr />
        </div>
    );
}

export default Profile;