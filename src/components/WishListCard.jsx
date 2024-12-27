/* eslint-disable react/prop-types */

import { TiDeleteOutline } from "react-icons/ti";
const WishListCard = ({product, handleWishRemove}) => {
    const{product_title, product_image, description, price, product_id} = product
    return (
        <>
             <div className="flex justify-between items-center border-2 border-gray-300 px-12 py-8 rounded-xl">

<div className="flex gap-4 justify-center items-center">
    <div className="bg-gray-400 p-5 rounded-xl">
       <img className="h-20 w-40 md:w-20 rounded-xl" src={product_image} alt="" />
    </div>
    <div>
       <h2 className="text-xl text-bold">{product_title}</h2>
       <p className="text-gray-400">{description}</p>
       <p className="text-lg text-bold">Price: $ {price}</p>
       <button className="btn bg-purple-600 text-white px-5 rounded-full">Add to Card</button>
    </div>
</div>
<p onClick={() =>handleWishRemove(product_id)} className="text-red-600 cursor-pointer"><TiDeleteOutline size={25} /></p>
</div>
        </>
    );
};

export default WishListCard;