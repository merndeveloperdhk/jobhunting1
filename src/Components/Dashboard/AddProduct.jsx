

const AddProduct = () => {
    const handleAddProduct = async (e) =>{
        e.preventDefault();
        const form = e.target;
        const title = form.title.value ;
        const price = form.price.value ;
        const description = form.description.value ;
        const category = form.category.value ;
        const picture = form.picture.value;
        const detailsProducts = {title, price, description, category, picture};
        console.log(detailsProducts);
        await fetch("http://localhost:3000/tShirts/", {
            method:"POST",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(detailsProducts)
        }).then(res => res.json()).then(data => {console.log(data)
            form.reset();
        })
    }
    return (
        <div className="w-full mx-auto text-center">
            <h1 className="text-xl font-semibold py-2">Add Product</h1>
            <form onSubmit={handleAddProduct}>
                <input className="border p-2 rounded w-1/3" type="text" name="title" placeholder="title" /> <br /><br />
                <input className="border p-2 rounded w-1/3" type="text" name="price" placeholder="Price" /> <br /><br />
                <input className="border p-2 rounded w-1/3" type="text" name="description" placeholder="Description" /> <br /><br />
                <input className="border p-2 rounded w-1/3" type="text" name="category" placeholder="category" /> <br /><br />
                <input className="border p-2 rounded w-1/3" type="text" name="picture" placeholder="image url" /> <br /><br />
                <input className="bg-green-500 px-2 p-1 rounded" type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;