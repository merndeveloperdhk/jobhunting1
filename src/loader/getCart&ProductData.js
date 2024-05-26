import { getStoredCart } from "../Components/Utils/fackDb";


export const cartAndProductData = async() =>{

    const productData = await fetch('tshirt.json');
    const products = await productData.json();
    const savedCart = getStoredCart();
    let cart = [];
    for(const id in savedCart){
        const foundProduct = products.find(product => product._id === id);
        if(foundProduct){
            foundProduct.quantity = savedCart[id]
            cart.push(foundProduct)
            
        }
        // console.log(foundProduct);
        }
        return { cart, products}
}
// export default cartAndProductData;