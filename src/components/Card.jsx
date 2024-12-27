/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";


const Card = ({product}) => {
  const {product_title, price, product_image, product_id} = product;

  const navigate = useNavigate()
    return (
        <div>
            
            <div className="card h-auto bg-base-100 shadow-xl flex-grow">
  <figure className="px-10 pt-10">
    <img
      src={product_image}
      alt="img"
      className="rounded-xl h-48 w-fit object-cover" />
  </figure>
  <div className="card-body items-start text-start flex-grow">
    <h2 className="card-title">{product_title}</h2>
    <p>Price: {price}k</p>
    <div className="card-actions">
      <button onClick={()=>navigate(`/details/${product_id}`)} className="btn bg-purple-700 text-white rounded-full">View Details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;