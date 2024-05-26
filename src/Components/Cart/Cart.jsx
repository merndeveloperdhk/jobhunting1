import { Link, useLoaderData } from "react-router-dom";
import CartItem from "../Cards/CartItem";
import { getStoredCart, removeAllItems, removeFromDb } from "../Utils/fackDb";
import toast from "react-hot-toast";
const Cart = () => {
 
   const productData = useLoaderData();
    console.log(productData);
    let cart = [];
    const savedCart = getStoredCart();
 
//   console.log(savedCart);
  for(const id in savedCart){
    const foundProduct = productData.find(product => product._id === id);
    if(foundProduct){
        foundProduct.quantity = savedCart[id]
        cart.push(foundProduct)
    }
   console.log(cart);
  } 

  let total = 0
  if(cart.length > 0){
    for(const prod of cart){
      total = total + (prod.price * prod.quantity);
      console.log(total);
    }
    
  }
  const discount = (total * 0.10).toFixed(2);
  const final = total - discount;
  
 //   Remove item from shopping cart
 const handleRemoveItem = id =>{
	removeFromDb(id)
  toast.success(`Remove from shopping cart`);
  }
  // Clear all data from shopping cart
  const handleRemoveAllData = () =>{
    removeAllItems()
    toast.success(`Remove all items from shopping cart`);
  }

  return (
    <div className="text-center font-bold">
      <h1 className="bg-gray-200 text-2xl">
        Cart Items 
      </h1>
      {/* cart itmes */}
      <div className="flex flex-col max-w-3xl mx-auto p-6 space-y-4 sm:p-10 bg-gray-900 text-gray-100 mt-4 rounded">
        <h2 className="text-xl font-semibold">
          {cart.length ? `Review items : ${cart.length}` : `Empty cart : ${cart.length}`}
        </h2>
        <ul className="flex flex-col divide-y dark:divide-gray-700">
          {
            cart.map(product => <CartItem
            key={product._id}
            product ={product}
            handleRemoveItem={handleRemoveItem}
            ></CartItem>)
          }
          
        
        </ul>
        <div className="space-y-1 text-right">
          <p>
            Total amount:
            <span className="font-semibold"> {total} $</span>
          </p>
          <p>
            Discount amount:
            <span className="font-semibold"> {total > 200? discount: "00 "} $</span>
          </p>
          <p>
            Final amount:
            <span className="font-semibold"> {total > 200? final : total} $</span>
          </p>
          <p className="text-sm dark:text-gray-400">
            Not including taxes and shipping costs
          </p>
        </div>
        <div className="flex justify-end space-x-4">
          {
            cart.length>0 ? <Link >
            <button 
            onClick={handleRemoveAllData}
            type="button"
            className="px-6 py-2 border rounded-md dark:border-violet-400 hover:bg-violet-700 duration-500 "
          >
            
            <span className="sr-only sm:not-sr-only"> Clear Cart</span>
          </button>
          </Link> :
         <Link to='/'>
          <button
          type="button"
          className="px-6 py-2 border rounded-md dark:border-violet-400 hover:bg-violet-700 duration-500 "
        >
          Back
          <span className="sr-only sm:not-sr-only"> to shop</span>
        </button>
        </Link>
          }
          
          <button
            type="button"
            className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400"
          >
            <span className="sr-only sm:not-sr-only">Continue to </span>Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
