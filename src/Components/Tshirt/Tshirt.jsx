import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Tshirt = ({tshirt, handleAddToCart}) => {
    console.log(tshirt);
    const{name, picture, price} = tshirt;
    return (
        <div className="text-center bg-slate-200 mx-auto p-2">
            <img className="w-72 h-80 object-cover" src={picture} alt="" />
            <h1 className="text-xl font-bold">{name}</h1>
            <h1 className="text-base font-bold text-blue-700">Price: ${price}</h1>
            <Link onClick={() => handleAddToCart(tshirt)} className="buy-btn">Buy Now</Link>
        </div>
    );
};

export default Tshirt;
Tshirt.propTypes = {
    tshirt: PropTypes.array,
    handleAddToCart: PropTypes.array
}