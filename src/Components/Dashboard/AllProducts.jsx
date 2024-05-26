import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { addToDb } from "../Utils/fackDb";
import DashboardAllProducts from "./DashboardAllProducts";


const AllProducts = () => {
    const tShirts = useLoaderData();
    // console.log(tShirts);
    const handleAddToCart = (id) =>{
        console.log(id);
        addToDb(id)
        toast.success(`Product added`);
    }
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {
                    tShirts.map(tshirt => <DashboardAllProducts
                    key={tshirt._id}
                    tshirt = {tshirt}
                    handleAddToCart ={handleAddToCart}
                    ></DashboardAllProducts>)
                }
            </div>
        </div>
    );
};

export default AllProducts;