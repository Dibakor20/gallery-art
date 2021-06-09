import React from 'react';

const Navbar = () => {
    return (
        <header class="text-white bg-gray-900 body-font">
            <header class="text-gray-400 bg-gray-900 body-font">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <span class="ml-3 text-xl">Gallery Art</span>
                    </a>
                    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a class="mr-5 hover:text-white">Gallery</a>
                    <a class="mr-5 hover:text-white">Pricing</a>
                    <a class="mr-5 hover:text-white">Contact</a>
                    </nav>
                </div>
            </header>
        </header>
    );
};

export default Navbar;