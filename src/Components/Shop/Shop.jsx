import { useLoaderData } from "react-router-dom";
import ProductCard from "../Cards/ProductCard";
import { addToDb } from "../Utils/fackDb";
import toast from "react-hot-toast";
import PropTypes from 'prop-types';


const Shop = () => {
    const tShirts = useLoaderData();
    console.log(tShirts);
    const handleAddToCart = (id) =>{
        console.log(id);
        addToDb(id)
        toast.success(`Product added`);
    };
    
    return (
        <div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                {
                    tShirts.map(tshirt => <ProductCard
                    key={tshirt._id}
                    tshirt = {tshirt}
                    handleAddToCart ={handleAddToCart}
                    ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Shop;
Shop.propTypes={
    ProductCard:PropTypes.object,
    
}