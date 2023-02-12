import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from './categories.module.css'
const CatCard = ({ category, isChild}) => {

    const categories = useSelector(state => state.reducer.data.categories)
    const [child, setChild] = useState([])
    useEffect(() => {
        setChild(categories.filter(cat => cat.marboot == category.id))
    }, [])
    
    useEffect(()=>{
        console.log(child)
    },[child])

    return (
        <div className={`${styles.cardWrapper} ${isChild ? styles.childWrapper : ''}`}>
            {category.name}

            {child.length > 0 ? child.map(cat => <CatCard key={cat.id} category={cat} isChild={true} />) : null}
        </div>
    );
}

export default CatCard;