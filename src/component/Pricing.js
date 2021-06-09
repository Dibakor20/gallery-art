import React from 'react';

const Pricing = () => {
    return (
        <>
          <div class="bg-gray-900 body-font overflow-hidden">
          <div class="flex flex-col sm:flex-row justify-center mb-6 sm:mb-0">
            <div class="sm:flex-1 lg:flex-initial lg:w-1/4 rounded-t-lg rounded-tr-none bg-white mt-4 flex flex-col">
            <div class="p-8 text-3xl font-bold text-center">Free</div>
            <div class="border-0 border-grey-light border-t border-solid text-sm">
                <div class="text-center border-0 border-grey-light border-b border-solid py-4">
                1 Images
                </div>
                <div class="text-center border-0 border-grey-light border-b border-solid py-4">
                Unlimited gallery
                </div>
                <div class="text-center border-0 border-grey-light border-b border-solid py-4">
                Analytics
                </div>
            </div>
            <div class="text-center mt-8 mb-8 mt-auto">
                <a href="#" class="inline-block bg-green text-white px-6 py-4 rounded hover:bg-green-darker hover:text-white hover:no-underline">Sign Up</a>
            </div>
            </div>
            <div class="flex-1 lg:flex-initial lg:w-1/4 rounded-t-lg bg-white mt-4 sm:-mt-4 shadow-lg z-30 flex flex-col">
            <div class="w-full p-8 text-3xl font-bold text-center">Basic</div>
            <div class="w-full border-0 border-grey-light border-t border-solid text-sm">
                <div class="text-center border-0 border-grey-light border-b border-solid py-4">
                2 Images
                </div>
                <div class="text-center border-0 border-grey-light border-b border-solid py-4">
                25 Images
                </div>
                <div class="text-center border-0 border-grey-light border-b border-solid py-4">
                Unlimite Images
                </div>
                <div class="text-center border-0 border-grey-light border-b border-solid py-4">
                Analytics
                </div>
            </div>
            <div class="w-full text-center px-8 pt-8 text-xl mt-auto">
                $2.99
                <span class="text-grey-light italic line-through">
                $4.99
                </span>
            </div>
            <div class="w-full text-center mb-8 mt-auto">
                <a href="#" class="inline-block bg-green text-white px-6 py-4 rounded hover:bg-green-darker hover:text-white hover:no-underline">Sign Up</a>
            </div>
            </div>
            <div class="flex-1 lg:flex-initial lg:w-1/4 rounded-t-lg rounded-tl-none bg-white mt-4 flex flex-col">
            <div class="p-8 text-3xl font-bold text-center">Pro</div>
            <div class="border-0 border-grey-light border-t border-solid text-sm">
                <div class="text-center border-0 border-grey-light border-b border-solid py-4">
                Unlimited Images
                </div>
                <div class="text-center border-0 border-grey-light border-b border-solid py-4">
                Unlimited Gallery
                </div>
                <div class="text-center border-0 border-grey-light border-b border-solid py-4">
                Unlimited toppings
                </div>
                <div class="text-center border-0 border-grey-light border-b border-solid py-4">
                Analytics
                </div>
            </div>
            <div class="text-center px-8 pt-8 text-xl mt-auto">
                $5.99
                <span class="text-grey-light italic line-through">
                $9.99
                </span>
            </div>
            <div class="text-center pt-8 mb-8 mt-auto">
                <a href="#" class="inline-block bg-green text-white px-6 py-4 rounded hover:bg-green-darker hover:text-white hover:no-underline">Sign Up</a>
            </div>
            </div>
        </div>
        </div>  
        </>
    );
};

export default Pricing;