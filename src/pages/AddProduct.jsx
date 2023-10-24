import Swal from 'sweetalert2'


const handleAddProduct =event =>{
    event.preventDefault();
    const form = event.target;

    const car_name = form.car_name.value;
    const brand_name = form.brand_name.value;
    const image = form.image.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;

    const newProduct ={car_name,brand_name,image,type,price,rating,description}
    console.log(newProduct)

    fetch('http://localhost:5000/car',{
        method :'POST',
        headers :{
            'content-type':'application/json'
        },
      body:JSON.stringify(newProduct)
    })
    .then(res =>res.json())
    .then(data=>{
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: 'Success',
                text: 'Product added successfully!',
                icon: 'success',
                confirmButtonText: 'OK'
              })

        }
    })
}

const AddProduct = () => {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900 font-poppins">
    <div className="flex justify-center min-h-screen">
        <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div className="w-full">
            <h1 className=" text-center  font-bold text-orange-500 normal-case text-5xl">Car Connect X</h1>
                <h1 className="text-2xl  text-center font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                    Add Your Favourite Car
                </h1>
                <form onSubmit={handleAddProduct} className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                    <div>
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200"> Name</label>
                        <input type="text"  name='car_name' placeholder="Car Name" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-orange-400 dark:focus:border-orange-400 focus:ring-orange-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Brand</label>
                        <input type="text" name='brand_name' placeholder="Brand Name" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-orange-400 dark:focus:border-orange-400 focus:ring-orange-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Image Url</label>
                        <input type="text" name='image' placeholder="Image Url" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-orange-400 dark:focus:border-orange-400 focus:ring-orange-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Type</label>
                        <input type="text" name='type' placeholder="Type of Car" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-orange-400 dark:focus:border-orange-400 focus:ring-orange-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Price (K)</label>
                        <input type="number" name='price' placeholder="Enter car price " className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-orange-400 dark:focus:border-orange-400 focus:ring-orange-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Rating </label>
                        <input type="number"name='rating' placeholder="Enter rating from 1-5 " className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-orange-400 dark:focus:border-orange-400 focus:ring-orange-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Short Desccription</label>
                        <input type="text" name='description' placeholder="Short Description" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-orange-400 dark:focus:border-orange-400 focus:ring-orange-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <button
                        className="flex items-center  justify-center w-full px-6 py-3  text-lg font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-500 rounded-lg hover:bg-orange-400 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-50">
                        Add Car
                    </button>
                </form>
            </div>
        </div>
    </div>
</section>
        </div>
    );
};

export default AddProduct;