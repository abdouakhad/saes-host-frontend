import React from "react";
import FooterInfo from "./FooterInfo"

const Footer = () => {
    return (
        <div className='w-full md:p-28 sm:p-16 p-8 h-full bg-my_gray text-white'>
            <div className='grid sm:grid-cols-3 grid-cols-2 gap-5'>
                <div className='flex flex-col space-y-3'>
                    <h1 className='text-3xl font-extrabold lowercase tracking-tight'> Company </h1>
                    <ul>
                        <li>SAES</li>
                        <li>Masterweb</li>
                        <li>Infographie sn</li>
                    </ul>
                    
                </div>
                <div>
                    <h1 className='text-3xl font-extrabold lowercase tracking-tight'> Masterweb </h1>
                    <ul>
                        <li>Infographie</li>
                        <li>Masterweb</li>
                        <li>Hire Us</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div>
                <h1 className='text-3xl font-extrabold lowercase tracking-tight'> Infographie </h1>
                    <ul>
                        <li>Sitemap</li>
                        <li>Privacy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
            </div>
            <div>
                    <h1 className='text-3xl font-extrabold lowercase tracking-tight text-center my-5'> Contact Us </h1>
                    <form >
                        <div className="w-full  grid md:grid-cols-2 grid-cols-1 md:gap-10">
                            <div>
                                <div class="flex flex-wrap -mx-3 mb-6">
                                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    
                                    <input class="appearance-none block w-full bg-gray-200 text-my_gray border border-grey-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="First Name" />
                                    
                                    </div>
                                    <div class="w-full md:w-1/2 px-3">
                                    
                                    <input class="appearance-none block w-full bg-gray-200 text-my_gray border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Last Name" />
                                    </div>
                                </div>
                                <div class="flex flex-wrap -mx-3 mb-6">
                                    <div class="w-full px-3">
                                    <input class="appearance-none block w-full bg-gray-200 text-my_gray border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 " placeholder="Entrez votre Email" id="email" type="email" />
                                    <p class="text-gray-300 text-xs italic">Mettez votre email svp!</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div class="flex flex-wrap -mx-3 mb-6">
                                    <div class="w-full px-3">
                                    <textarea class=" no-resize appearance-none block w-full bg-gray-200 text-my_gray border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500   h-32 resize-none" id="message"></textarea>
                                    <p class="text-gray-300 text-xs italic">We'd like to here from you. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-end ">           
                            <button class="shadow bg-white  hover:bg-teal-400 focus:shadow-outline focus:outline-none text-black font-bold w-36 py-2 px-4 rounded-lg" type="button">
                                Envoyer
                            </button>       
                        </div>
                    </form>
                </div>
                <footer>
                    <FooterInfo />
                </footer>
        </div>
    )
}

export default Footer;
