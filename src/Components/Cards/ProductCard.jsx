import PropTypes from 'prop-types';
import noImage from '../../assets/No Image.jpg'
import { Link } from 'react-router-dom';

const ProductCard = ({ tshirt, handleAddToCart }) => {
  const { _id, name, picture, price, category } = tshirt
  return (
    <div className='bg-gray-100 p-6 rounded shadow-lg'>
      <img
        className='object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80'
        src={picture || noImage}
        alt=''
      />
      <p className='mb-2 text-xl font-bold leading-none sm:text-2xl'>{name}</p>
      <p className='mb-2 text-base font-bold leading-none'>Category: {category}</p>
     
      <p className='text-gray-700 font-bold'>Price: {price}$</p>
      <div className='flex gap-2 mt-2'>
      <button
        onClick={() => handleAddToCart(_id)}
        type='button'
        className='px-4 py-1 bg-yellow-600 rounded-md text-white  '
      >
        Add To Cart
      </button>
      <button  className='px-4 py-1 bg-green-600 rounded-md text-white'>
        <Link to={`/details/${_id}`}>Details</Link>
      </button>
      </div>
    </div>
  )
}

export default ProductCard;
ProductCard.propTypes = {
  tshirt :PropTypes.object,
  handleAddToCart: PropTypes.func
}
