/* eslint-disable react/prop-types */
import { FaRegStar,FaShoppingCart  } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { addToStoredCardList, addToStoredWishList } from "../utitity";
 import { useContext } from "react";
import { countContext } from "../layouts/MainLayout";



const ProductDetailsCard = ({product}) => {
  const {setCount} = useContext(countContext)
     const {product_title, price, product_image, description, Specification, rating, availability, product_id} = product;

     const handleAddToCard = (id) =>{
        addToStoredCardList(id);
        setCount((previous)=>previous + 1);
        
     }
     const handleAddToWishList = (id) =>{
      addToStoredWishList(id)
      setCount((previous)=>previous + 1);
      
     }

    
    
      return (
        <div className="hero bg-gray-100 w-10/12 mx-auto rounded-xl mb-4 absolute z-50 top-[38%] left-[8%]">
            
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={product_image}
            className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{product_title}</h1>
            <p>Price:${price}</p>
            <button className={`btn text-sm rounded-full ${availability? 'bg-lime-100 border border-lime-200':'bg-red-100 border border-red-400'}`}>{availability?'In Stock':'Out Stock'}</button>
            <p className="py-6">
              {description}
            </p>
            <h2>Specification:</h2>
            <p>{Specification}</p>
            <div className="flex items-center gap-1 ">
            <p>Rating</p>
            <p className="text-orange-300"><FaRegStar /></p>
            
            </div>
            <div className="rating">
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                   <input
                         type="radio"
                          name="rating-2"
                           className="mask mask-star-2 bg-yellow-300"
                            defaultChecked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-300" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-300" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-300" />
                    <span>{rating}</span>
            </div>
            <div>
            <button onClick={()=>handleAddToCard(product_id)} className="btn bg-purple-700 text-white rounded-full hover:text-gray-800">Add To Card <FaShoppingCart /></button>
            
            <button onClick={()=>handleAddToWishList(product_id)} className="btn rounded-full hover:bg-red-600"><IoMdHeartEmpty size={20} /></button>
            </div>
          </div>
        </div>
      </div>
      );
 
};


export default ProductDetailsCard;