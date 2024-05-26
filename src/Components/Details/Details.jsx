import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {
    const productDetails = useLoaderData();
    const params = useParams()
    console.log(params, productDetails);
    return (
        <div>
            <h1>Details:</h1>
        </div>
    );
};

export default Details;