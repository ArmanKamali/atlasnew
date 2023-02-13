import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeCategoryNameApi } from "../../api/categoriesApi";
import styles from './categories.module.css'
const CatCard = ({ category, isChild }) => {

    const categories = useSelector(state => state.reducer.data.categories)
    const token = useSelector(state => state.reducer.user.token)

    const [child, setChild] = useState([])
    useEffect(() => {
        setChild(categories.filter(cat => cat.marboot == category.id))
    }, [])

    useEffect(() => {
    }, [child])


    const changeCatName = async (e) => {
        let data = {
            id: category.id,
            value: e.target.value,
            name: 'name',
            token
        }

        await changeCategoryNameApi(data)
    }
    return (
        <div className={`${styles.cardWrapper} ${isChild ? styles.childWrapper : ''}`}>
            <input type="text" defaultValue={category.name} className="form-control" onChange={(e) => changeCatName(e)} />
            {category.products_count}

            {child.length > 0 ? child.map(cat => <CatCard key={cat.id} category={cat} isChild={true} />) : null}
        </div>
    );
}

export default CatCard;