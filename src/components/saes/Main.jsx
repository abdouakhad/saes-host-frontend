import React from "react";
import masterwebLogo from '../../images/masterwebLogo.png'
import infographie from '../../images/infographieLogo.png'
import badge from '../../svg/certificate-solid.svg'
import code from '../../svg/laptop-code-solid.svg'
import designTools from '../../img/design-tools.png'
import { LightningBoltIcon } from "@heroicons/react/outline";
import '../../../src/styles.css'
import Approach from "./Approach";

import approach, {approach_info} from './ApproachInfo'
import { Link } from "react-router-dom";




function Main(){
    
    return(
    <>
        <div className="main-saes bg main-bg">
            <div className="main-section md:py-20 py-10 relative">
                <div className = ' lg:w-7/12 md:w-9/12 text-white md:px-10 px-5 md:mt-0 mt-24'>
                    <div className = 'absolute md:left-36 right-8 top-14'>
                        <img className = 'w-20'src = {badge} alt = 'certifier' />
                    </div>
                    <div className="title mb-9 leading-loose font-bold md:pt-20">
                        <h1 className=" md:text-7xl text-5xl"> Logo & Website Design Agency</h1>
                        <p className="tracking-widest mt-1 sm:text-3xl text-xl">Service aux entreprises du Senegal</p>
                    </div>
                    <p className ='font-light text-lg '>
                        We're specialized in visual storytelling by creating cohesive logo and websites
                        design solutions for small businesses giving lasting impressions to audiences in 
                        a digital world.
                    </p>
                </div>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center py-10'>
            <div className='flex space-x-6  flex-col justify-center items-center'>
                <div className='h-40 w-40 rounded-full ring-4 ring-bleu ring-offset-4 my-5 '>
                    <img src={masterwebLogo} className='w-full h-full object-cover' alt='Infographie Logo' />
                </div>
                <h1 className='font-extrabold text-bleu text-4xl md:text-6xl '>masterweb</h1>
            </div>
            <div className='tracking-wide mt-4 w-9/12 m-auto text-center text-xl'>Sed ut voluptatem accusantium doloremque laudantium, 
                inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia.
            </div>
        </div>
        <div className="section grid md:grid-cols-2 grid-cols-1 md:h-screen ">
            <div className="bg img-section h-full">
                <p className="h-96">
                    
                </p>
            </div>
            <div className = ' web-section bg-my_gray md:py-5 py-10 lg:px-20 md:px-12 sm:px-8 px-4 md:flex md:flex-col  text-white  justify-center relative'>
                <div className = 'absolute img-code lg:right-36 md:right-16 right-32 top-20'>
                    <img className = 'w-12' src = {code} alt = 'code' />
                </div>
                <h1 className = ' lg:text-6xl text-5xl'><span className = 'text-bleu '>Design </span> is <span className = ' block'>  strategic.</span></h1>
                <p className = ' my-7 tracking-wide'>"A well crafted design strategy consistently produces desired outcomes and brand awareness.
                    We are firmed belivers that success lies in creative collaboration with our clients."
                </p>
                <p className = 'text-center mt-5'>
                    <Link to='/masterweb/home' className = 'bg-bleu text-xl text-white  p-2 rounded-lg border-2 border-white hover:border-bleu hover:bg-white hover:text-bleu'>Visit Masterweb </Link>                    
                </p>
            </div>
        </div>
        {/* Approach */}

        <div className=" grid md:grid-cols-3 md:h-screen md:relative  md:mt-10">
            <div className = ' md:col-span-1 col-span-2  flex justify-center  md:bg-white bg-bleu md:text-my_gray text-white '>
                <p className = 'md:pt-28 border-b-8 border-bleu md:w-4/12 w-9/12 md:ml-0 md:absolute z-10 md:left-16 md:overflow-visible lg:text-6xl md:text-5xl text-5xl font-black md:mt-0 mt-10'> Our approach for creating a 
                <span className = 'md:text-bleu text-my_gray'> winning </span> brand 
                </p>
            </div>
            <div className = 'number col-span-2 md:relative static'>
                <div className = 'content md:absolute static bg-bleu -top-40 w-full md:pt-32 py-16 md:rounded-l-xl '>
                    {approach.map((info)=> (
                        <Approach 
                        count = {info.count}
                        title = {info.title} 
                        text = {info.text}
                        />
                    ))}
                </div>
            </div>
        </div>
        <div className='h-full flex flex-col justify-center items-center mb-10 md:mt-0 mt-10'>
            <div className='flex space-x-6 flex-col justify-center items-center'>
                <div className='h-40 w-40 rounded-full ring-4 ring-jaune ring-offset-4 my-5 '>
                    <img src={infographie} className='rounded-full w-full h-full object-cover' alt='Infographie Logo' />
                </div>
                <h1 className='font-extrabold text-jaune text-4xl md:text-6xl '>Infographie</h1>
            </div>
            <div className='tracking-wide mt-4 w-9/12 m-auto text-center text-my_gray text-xl'>Sed ut voluptatem accusantium doloremque laudantium, 
                inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                 sed quia consequuntur magni.
            </div>
        </div>
        <div className="grid md:grid-cols-3 relative md:h-screen bg-jaune">
            <LightningBoltIcon className = 'z-10 w-32 h-32 absolute md:bottom-1/3 md:left-1/3 top-0 right-10 md:ml-0  text-my_gray'  />

            <diV className = 'infoName col-span-1 '>
                <div className = 'md:rounded-br-3xl bg-jaune md:w-1/2 md:h-3/4 md:absolute left-0 px-10 flex justify-center items-center md:py-0 py-32 '>
                    <h1 className = ' font-black text-5xl text-my_gray '>Brand naming & guidelines
                    <p className = 'text-left mt-5 '>
                    <Link to= '/infographie/home' className = 'bg-my_gray text-xl text-jaune  p-2 rounded-lg border-2 border-jaune hover:border-my_gray hover:bg-gray-800 '>Visit Infographie Sn </Link>                    
                    </p>
                    </h1>
                </div>
                
            </diV>
            <diV className = 'infoImg col-span-2 md:h-full md:rounded-bl-3xl md:h-full h-96'>
                
            </diV>
        </div>
        <div className = 'bg-jaune py-10 flex justify-center items-center'>
            <h1 className = 'font-bold md:text-9xl text-7xl text-my_gray'>Design </h1>
        </div>
        <div className = 'infoApproach grid md:grid-cols-5 grid-cols-1 bg-my_gray '>
            <div className = 'md:col-span-2 bg-my_gray flex flex-col justify-center items-center md:py-0 py-10'>
            {approach_info.map((info)=> (
                <Approach 
                    count = {info.count}
                    title = {info.title} 
                    text = {info.text}
                    />
                ))}
            </div>
            <div className="col-span-3">
                <img className = 'md:rounded-bl-3xl object-fill h-full' src = {designTools} alt = 'design' />
            </div>
        </div>
       
    </>);
}

export default Main;