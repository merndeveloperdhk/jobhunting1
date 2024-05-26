import noImage from '../../assets/No Image.jpg'
import PropTypes from 'prop-types';

const DashboardAllProducts = ({ tshirt, handleAddToCart }) => {
    const { _id,name, picture, price, category } = tshirt
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
       <div className="flex gap-2 mt-2">
       <button
          onClick={() => handleAddToCart(_id)}
          type='button'
          className='px-4 py-1 bg-green-600 rounded-md text-white'
        >
          Details
        </button>
       <button
          onClick={() => handleAddToCart(_id)}
          type='button'
          className='px-4 py-1 bg-red-600 rounded-md text-white'
        >
          Delete
        </button>
       <button
        
          type='button'
          className='px-4 py-1 bg-yellow-600 rounded-md'
        >
          Edit
        </button>
       </div>
      </div>
    );
};

export default DashboardAllProducts;
DashboardAllProducts.propTypes = {
    tshirt: PropTypes.object,
    handleAddToCart:PropTypes.func

}