import { Helmet } from 'react-helmet';
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { clearStorage, getAddToCardList, getAddToWishList, removeAddToCard, removeAddToWish} from "../utitity";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import img from '../assets/Group.png'
import { TbAdjustmentsSearch } from "react-icons/tb";
import DashboardCard from "../components/DashboardCard";
import WishListCard from "../components/WishListCard";

const Dashboard = () => {
    const [cardList, setCardList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    setIsDisabled(true);

  }
  const handlePurchase = () => {
    handleParch()
    handleClick()
  }
    //   const [removeCard,setRemoveCard] = useState([])
    const allProducts = useLoaderData(); 

    useEffect(() => {
        const storedCardList = getAddToCardList();
        const addCardList = allProducts?.filter(card => storedCardList.includes(card.product_id));
        setCardList(addCardList);
    }, [allProducts]);

    useEffect(() => {
        const storedWishList = getAddToWishList();
        const addWishList = allProducts?.filter(card => storedWishList.includes(card.product_id));
        setWishList(addWishList);
    }, [allProducts]);

    

      const handleRemove = (id) =>{
        removeAddToCard(id)
         const remove = getAddToCardList()
         console.log(remove)
         const addCardList = allProducts?.filter(card =>remove.includes(card.product_id));
        setCardList(addCardList);
        // cardList.find((total, product) => parseInt(total -product.price), 0)
         
      }

      const handleWishRemove = (id) =>{
        removeAddToWish(id)
        const remove = getAddToWishList()
        const addWishList = allProducts?.filter(card => remove.includes(card.product_id));
        setWishList(addWishList);
        
         
      }

     const handleParch=() =>{
        // clearStorage()
        // setCardList([])
        document.getElementById('my_modal_5').showModal()
        
     }
     const handleModal=() =>{
        clearStorage()
         setCardList([])
     }

    const handleSort = (sortBtn) => {
        if (sortBtn === 'Sort by price') {
            const sorted = [...cardList].sort((a, b) => b.price - a.price);
            setCardList(sorted); 
        }
    };
    const totalPrice = cardList.reduce((total, product) => (total +product.price), 0)
    const parTotal = totalPrice.toFixed(2)
    return (
        <>
        <Helmet>
        <title>GadgetHeaven || Dashboard</title>
      </Helmet>
            <div className="mt-20 md:mt-28">
                <div className="text-center rounded-xl mx-auto bg-purple-700 py-14 px-8 my-4 space-y-4">
                    
                    <h2 className="text-2xl font-semibold text-white">Dashboard</h2>
                    <p className="text-white font-thin">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
                <Tabs>
                    <TabList className="text-center hover:text-purple-500 text-purple-500 font-bold">
                        <Tab>Cart</Tab>
                        <Tab>Wishlist</Tab>
                    </TabList>
                    <TabPanel className="my-12 md:my-20 text-start">
                        <div className="flex justify-between">
                            <div>
                                <h2 className="text-2xl font-bold">Cart List: {cardList.length}</h2>
                            </div>
                            <div className="flex gap-4 text-center items-center">
                                  <p>Total cost: ${parTotal}</p>  
                                <button onClick={() => handleSort('Sort by price')} className="btn text-purple-600">Sort by price <TbAdjustmentsSearch />
                                </button>
                                <button onClick={handlePurchase} disabled={isDisabled} className="btn text-purple-600 ">Purchase</button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 py-8"> 
                            {
                                cardList.map((product, idx) => <DashboardCard handleRemove={handleRemove} key={idx} product={product} />)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel className="my-12 md:my-20 text-start">
                        <h2 className="text-2xl font-bold">Wishlist List: {wishList.length}</h2>
                        <div className="flex flex-col gap-4 py-8"> 
                            {
                                wishList.map((product, idx) => <WishListCard handleWishRemove={handleWishRemove} key={idx} product={product} />)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
            
<dialog id="my_modal_5" className="modal modal-center sm:modal-middle w-64 md:w-80 mx-auto">
  <div className="modal-box flex flex-col justify-center items-center text-center space-y-2">
   <img className='flex items-center text-center' src={img} alt="" />
    <h3 className="font-bold text-lg ">Payment Successfully</h3>
    <p className="py-4">Thanks for purchasing</p>
    <p>Total: {parTotal}</p>
    <div className="modal-action">
      <form method="dialog">
        <button onClick={handleModal} className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
        </>
    );
};

export default Dashboard;