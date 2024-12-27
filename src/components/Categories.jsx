/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import '../App.css'



const Categories = ({categories}) => { 
    
    return (
        <div className="gap-4 flex flex-col justify-center w-48 mx-auto text-center activeBtn">
            
            <NavLink to='/' className="btn">All Product</NavLink>  
           
            {
          categories.map((category,idx) =>(<NavLink key={idx} to={`/category/${category.category_name}`} className="btn">{category.category_name}</NavLink>))
            }
        </div>
    );
};

export default Categories;