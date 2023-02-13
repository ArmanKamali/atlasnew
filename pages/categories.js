import { useEffect, useState } from "react";
import { getAllCategoriesApi } from "../api/categoriesApi";
import { useSelector, useDispatch } from "react-redux";
import CatCard from "../components/Categories/catCard";

const Categories = () => {

    const categories = useSelector(state => state.reducer.data.categories)

    const [mainCats, setMainCats] = useState(false)




    useEffect(() => {
        if (categories)
            setMainCats(categories.filter(category => category.type == 1))
    }, [categories])


    if (!mainCats)
        return <div>
            Loading...
        </div>



    return (
        <div className="d-flex flex-row justify-content-around flex-wrap align-items-center m-5 ">
            {mainCats.map(category => <CatCard category={category} key={category.id} isChild={false}/>)}
        </div>
    );
}

export default Categories;