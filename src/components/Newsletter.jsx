
const Newsletter = () => {
    return (
        <div>
           <section class="bg-slate-100 dark:bg-gray-900 font-poppins">
    <div class="container px-4 py-16 mx-auto lg:flex lg:items-center lg:justify-between">
        <h2 class="text-2xl font-poppins font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
            Join <span className=' font-cursive font-bold text-orange-500'>Car Connect X</span> for update & offers !
        </h2>

        <div class="mt-8 lg:mt-0">
            <div class="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:-mx-2">
                <input id="email" type="text" class="px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-lg sm:mx-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-orange-400 dark:focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email Address"/>

                <button class="btn bg-orange-500  hover:bg-orange-400 focus:outline-none  text-white">
                    Get Started
                </button>
            </div>
        </div>
    </div>
</section>
        </div>
    );
};

export default Newsletter;