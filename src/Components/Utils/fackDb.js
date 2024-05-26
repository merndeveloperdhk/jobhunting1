//Add to to Local storage
const addToDb = id => {
    let shoppingCart ={}
    // Get previous data from local storage
    const storedCart = localStorage.getItem("shopping-cart")
    if(storedCart){
        shoppingCart = JSON.parse(storedCart)

    }
    // Quantity
    const quantity = shoppingCart[id]
    if(quantity){
        const newQuantity = quantity + 1
        shoppingCart[id] = newQuantity
    }else{
        shoppingCart[id] = 1
    }

    // set to Local storage
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart))
}

// Get stored data from cart
const getStoredCart = () =>{
    let shoppingCart ={}
    // Get previous data from local storage
    const storedCart = localStorage.getItem("shopping-cart")
    if(storedCart){
        shoppingCart = JSON.parse(storedCart)
    }
    return shoppingCart;
}

// Remove a specific element from local storage
const removeFromDb = id => {
    // Get previous data from local storage
    const storedCart = localStorage.getItem("shopping-cart")
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart)
        if( id in shoppingCart){
            delete shoppingCart[id]
             // set to Local storage
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart))
        }
    }
}
// remove all item from shopping cart
const removeAllItems = () => localStorage.removeItem("shopping-cart")
export {addToDb, getStoredCart, removeFromDb, removeAllItems}