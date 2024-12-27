 import { useLoaderData, useParams } from "react-router-dom";
 import ProductDetailsCard from "../components/ProductDetailsCard";



const ProductDetails = () => {
    // const [products,setProducts] = useState([])
    const {details} = useParams();
     console.log(details)
     const id = parseInt(details)
     const cartData = useLoaderData()
     const products = cartData.find((product) => parseInt(product.product_id) === id);
    return (
        <>
            <div className="text-center h-[300px] rounded-xl mx-auto bg-purple-700 pt-20 mt-24  relative">
                <h2 className="text-2xl font-semibold text-white">Product Details</h2>
                <p className="text-white font-thin">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className="h-[600px] md:h-[400px]">
            <ProductDetailsCard product={products}></ProductDetailsCard>
        
            </div> 
           
        </>
    );
};

export default ProductDetails;