import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import ProductsComponent from '../../components/products/productsComponent'
import styles from '../../styles/Home.module.css'
import { Particle } from '../../components/utils/particle'

const Products = () => {
    // Split the current URL into an array of strings
    const url = window.location.pathname.split('/')
    // Get the current URL's path
    const { asPath } = useRouter()

    // Get the 'categories' from the Redux store
    const categories = useSelector(state => state.reducer.products.category)
    // State to store the category we want to display
    const [category, setCategory] = useState(false)

    // Use effect hook to set the 'category' based on the URL
    useEffect(() => {
        if (url[2]  != 'all') {
            // If the URL has a valid category name, set the category to the
            // category that matches the URL's category name
            setCategory(categories.filter(category => category.engName === url[2])[0])
        } else {
            // If the URL doesn't have a valid category name, set the category to 'all'
            setCategory('all')
        }
        console.log('category=',category)
    }, [categories, asPath])

    return (
        <div className={styles.container}>
            {/* Render a particle animation */}
            <div className={styles.particles}>
                <Particle />
            </div>
            {category ?
                // Render the ProductsComponent and pass it the 'category'
                <ProductsComponent category={category} />
                : null
            }
        </div>
    );
}

export default Products;