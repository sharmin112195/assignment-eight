/* eslint-disable react/prop-types */

import { NavLink } from 'react-router-dom';
import bgBanner from '../assets/banner.jpg'

const Banner = ({title,subtitle}) => { 
    return (
      <>
        <div className="hero bg-purple-600 min-h-[600px] rounded-b-xl mx-auto mt-12">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-5xl font-bold text-white">{title}</h1>
            <p className="py-6 text-white">
           {subtitle}
            </p>
            <NavLink to='/dashboard' className="btn bg-white text-purple-700 rounded-full px-8">Shop Now</NavLink>
            
          </div>
        </div>
        
      </div>
       <div className="-mt-28 md:-mt-40 w-[90%] md:w-[40%] flex justify-center items-center p-4 rounded-3xl border-2 mx-auto">
       <img className='h-[350px] rounded-xl' src={bgBanner} alt="" />
       
   </div>
   </>
    );
};

export default Banner;