import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const ProductCards = () => {
    const [products, setProducts] = useState([]);
    const { category } = useParams();
    console.log(category);
    const data = useLoaderData();
    console.log(data);

    useEffect(() => {
        if (category) {
            
            const filterByCategory = [...data].filter(product => product.category === category);
            setProducts(filterByCategory);
        } else {
            
            setProducts(data);
        }
    }, [category, data]);

    return (
        <>
            {products.length === 0 ? (
                <h1 className="text-7xl font-bold text-red-700 text-center py-48">No Data</h1>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8">
                    {products.map((product, idx) => (
                        <Card key={idx} product={product}></Card>
                    ))}
                </div>
            )}
        </>
    );
};

export default ProductCards;
