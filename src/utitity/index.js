import { toast } from "react-toastify";

const getAddToCardList = () =>{
const storedCardString = localStorage.getItem('card-list')
if(storedCardString){
    const storedCard = JSON.parse(storedCardString);
    return storedCard;
}
else{
    return [];
}
}
const addToStoredCardList = (id) =>{
    const storedList = getAddToCardList();
    if(storedList.includes(id)){
        toast.error('already exists in the card list')
    }
    else{
        storedList.push(id);
        const storedCardString = JSON.stringify(storedList);
        localStorage.setItem('card-list',storedCardString);
        toast.success('Successfully card list add');
    }
}

const getAddToWishList = () =>{
    const storedWishString = localStorage.getItem('wish-list')
if(storedWishString){
    const storedWish = JSON.parse(storedWishString);
    return storedWish;
}
else{
    return [];
}
}
const addToStoredWishList = (id) =>{
    const storedList = getAddToWishList();
    if(storedList.includes(id)){
        toast.error('already exists in the wish list')
    }
    else{
        storedList.push(id);
        const storedWishString = JSON.stringify(storedList);
        localStorage.setItem('wish-list',storedWishString);
        toast.success('successful wish list add')
    }
}
const removeAddToCard = (id) => {
    console.log(id)
    const addCards = getAddToCardList()
    
     const remaining = addCards.filter(card =>card != id)
     console.log(remaining)
    localStorage.setItem('card-list', JSON.stringify(remaining))
     toast.success('Successfully Remove')
}
const removeAddToWish = (id) =>{
    const addWish = getAddToWishList()
    const remaining = addWish.filter(card =>card != id)
    localStorage.setItem('wish-list', JSON.stringify(remaining))
    toast.success('Successfully Remove')
}
const clearStorage = () => {
    localStorage.clear();
    toast.success('All data cleared from storage');
};


export{addToStoredCardList, getAddToCardList, addToStoredWishList, getAddToWishList,removeAddToCard, clearStorage, removeAddToWish}