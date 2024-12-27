import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import { Helmet } from 'react-helmet';
import Categories from "../components/Categories";


const Home = () => {
    const categories = useLoaderData()
    return (
        <div>
            <Helmet>
        <title>GadgetHeaven || Home</title>
      </Helmet>
           
         <div>
         <div>
          <Banner title={'Upgrade Your Tech Accessorize with Gadget Heaven Accessories'} subtitle={' Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}></Banner>
          </div>
           
         </div>
         
         
        <h2 className="text-4xl text-center font-bold text-purple-700 mt-24">Explore Cutting-Edge Gadgets</h2>
        
         <div className="grid grid-cols-1 md:grid md:grid-cols-4">
         <div className="col-span-1 mt-12 shadow-lg p-5 rounded-xl mr-3">
         <Categories categories={categories}></Categories>
         </div>
         {/* dynamic section */}
          <div className="col-span-3">
          <Outlet></Outlet>
          </div>
         </div>
           
           
        </div>
    );
};

export default Home;
