import Link from 'next/link'

const Products = ({ category }) => {
    console.log(category)
    return (
        <>
            {
                category.childs.map(category =>
                    <div>
                        <Link href="/products">
                            {category.name}
                        </Link>
                    </div>
                )
            }
        </>
    );
}

export default Products;