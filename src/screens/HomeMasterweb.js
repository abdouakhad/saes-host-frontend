import { ChevronDownIcon, ClockIcon, CloudIcon, CurrencyDollarIcon, DesktopComputerIcon, DeviceTabletIcon, LightningBoltIcon, PresentationChartBarIcon, ScaleIcon, ServerIcon, TemplateIcon, UserGroupIcon } from "@heroicons/react/outline";
import React, { Fragment } from "react";
import WebDesigner from "../images/web_designer.png";
import BG from "../images/bg_old.svg";
import WUs from "../images/266.jpg";
import Me from "../images/me.jpg";
import CSS from "../images/progIcons/css3.svg";
import HTML5 from "../images/progIcons/html5.svg";
import django from "../images/progIcons/django.svg";
import electronjs from "../images/progIcons/electronjs-icon.svg";
import nodejs from "../images/progIcons/nodejs.svg";
import nextjs from "../images/progIcons/nextjs.svg";
import amazon_aws from "../images/progIcons/amazon_aws.svg";
import youtube from "../images/progIcons/youtube.svg";
import reactSVG from "../images/progIcons/react.svg";
import deliverySVG from "../images/delivery.svg";
import konyLogo from "../images/companyLogo/kony.svg";
import bbtLogo from "../images/companyLogo/bbt.svg";
import mashableLogo from "../images/companyLogo/mashable.svg";
import natsio from "../images/companyLogo/natsio.svg";
import BAC from "../images/bac.png";
import { Tab } from "@headlessui/react";
import CardWeb from "../components/masterweb/CardWeb";
import TeamCard from "../components/masterweb/TeamCard";
import FeatureCard from "../components/masterweb/FeatureCard";

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import TestimonialCard from "../components/masterweb/TestimonialCard";
import PartnerCard from "../components/masterweb/PartnerCard";
import Footer from "../components/masterweb/Footer";


const HomeMasterweb = () => {


    return (
        <div className='bg-gray-50'>
            <div className='relative flex flex-col px-8 sm:px-4 w-full h-screen bg-gradient-to-b from-black to-master_blue lg:flex-row lg:items-center'>
                <div className='text-3xl md:text-6xl font-extrabold tracking-tight mt-16 mb-2 lg:-mt-20 lg:w-2/5 lg:pl-8'>
                    <span className='text-white block mb-4'> Masterweb, </span>
                    <div className='w-1/5 h-1 bg-master_blue -mt-2 mb-4' aria-hidden='true' />
                    <p className='text-master_blue lg:text-gray-200 text-lg font-medium leading-relaxed w-4/5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex neque quia iure obcaecati aperiam dolor ipsa! Neque architecto ut magnam.
                    </p>
                    <div className='flex justify-between items-center w-3/5 mt-4 text-white'>
                        <div className=''>
                            <ScaleIcon className='w-10 h-10 md:w-12 md:h-12 border-2 border-gray-400 rounded-md px-2 mb-2' />
                            <span className='text-white block text-sm tracking-wide text-center font-bold invisible lg:visible'>
                                Stability
                            </span>
                        </div>
                        <div className=''>
                            <PresentationChartBarIcon className='md:w-12 md:h-12 w-10 h-10 border-2 border-gray-400 rounded-md px-2 mb-2' />
                            <span className='text-white block text-sm tracking-wide text-center font-bold invisible lg:visible'>
                                Scalability
                            </span>
                        </div>
                        <div className=''>
                            <ServerIcon className='md:w-12 md:h-12 w-10 h-10 border-2 border-gray-400 rounded-md px-2 mb-2' />
                            <span className='text-white block text-sm tracking-wide text-center font-bold invisible lg:visible'>
                                CI/CD
                            </span>
                        </div>
                    </div>
                </div>
                <div className='-mt-16 lg:mt-0 md:w-4/6 md:-mt-20 md:mx-auto w-full max-h-80 md:max-h-full'>
                    <img src={WebDesigner} alt='Web Designer' className='object-fill' />
                </div>
                <a href="#id_next">
                    <div className='absolute bottom-2 left-1/2 translate-x-1/2 border-2 border-black rounded-full animate-bounce cursor-pointer'>
                        <ChevronDownIcon className='w-8 h-8 text-black' />
                    </div>
                </a>
            </div>


            {/* Section what we build */}
            <div id="id_next" className='relative pt-6 px-4 h-auto md:h-full'>
                <div className='text-center w-full py-4'>
                    <span className='text-master_blue font-extrabold text-3xl md:text-5xl block tracking-wide mb-4'>What we build</span>
                    <div className='font-medium text-lg md:text-2xl text-gray-400 w-4/5 md:w-full mx-auto leading-relaxed pt-2'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est saepe voluptas fugiat.
                    </div>
                </div>
                <div className='flex h-full flex-col lg:flex-row'>
                    {/* Grid Product */}
                    {/* <div className='absolute top-1/2 bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-blue-50' /> */}

                    <div className='grid grid-flow-row w-full lg:w-2/5 md:w-4/5 mx-auto'>
                        <div className='flex space-x-4 items-start m-4'>
                            <div>
                                <CloudIcon className='w-14 h-14 shadow-md rounded-md bg-master_blue p-2' />
                            </div>
                            <div className='text-sm md:text-base text-gray-800'>
                                <h1 className='font-extrabold text-lg uppercase tracking-wide text-master_blue'>Web</h1>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, nesciunt.
                            </div>
                        </div>
                        <div className='flex space-x-4 items-start m-4'>
                            <div>
                                <DesktopComputerIcon className='w-14 h-14 shadow-md rounded-md bg-master_blue p-2' />
                            </div>
                            <div className='text-sm md:text-base text-gray-800'>
                                <h1 className='font-extrabold text-lg uppercase tracking-wide text-master_blue'>Desktop</h1>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis assumenda harum suscipit, laudantium excepturi accusantium nihil explicabo mollitia quam reprehenderit!
                            </div>
                        </div>
                        <div className='flex space-x-4 items-start m-4'>
                            <div>
                                <DeviceTabletIcon className='w-14 h-14 shadow-md rounded-md bg-master_blue p-2' />
                            </div>
                            <div className='text-sm md:text-base text-gray-800'>
                                <h1 className='font-extrabold text-lg uppercase tracking-wide text-master_blue'>Mobile</h1>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum enim natus voluptas explicabo, laudantium voluptatibus.
                            </div>
                        </div>
                    </div>

                    <div className='w-full lg:w-3/5 md:w-4/5 mx-auto'>
                        <img src={BG} alt='bg' className='object-fill' />
                    </div>

                </div>
            </div>

            {/* Why to choose us */}
            <div className='flex flex-col px-4 m-4 h-full relative'>

                <div className='w-full md:w-4/5 ml-0 h-auto text-lg sm:text-2xl font-medium leading-8 tracking-wide text-gray-600 my-8'>
                    <h1 className='font-extrabold text-3xl sm:text-5xl capitalize tracking-tight text-master_blue my-4'>
                        Lorem ipsum dolor sit amet consectetur.
                    </h1>

                    <p className='mt-8 mb-2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vitae aliquam adipisci.
                    </p>
                    <p className='mb-2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ducimus repellat possimus culpa dolore voluptate?
                    </p>
                </div>

                <div className='flex flex-col'>

                    <div className='flex flex-col md:flex-row md:justify-between md:items-center md:w-full md:mx-auto my-4'>
                        <div className='flex space-x-4 items-start m-4 md:flex-col md:space-x-0 md:space-y-2 md:p-2'>
                            <div>
                                <ScaleIcon className='w-14 h-14 lg:w-20 lg:h-20 shadow-md rounded-md border-2 border-gray-400 p-2' />
                            </div>
                            <div className='text-base font-medium text-gray-800'>
                                <h1 className='font-extrabold text-lg capitalize tracking-tight text-master_blue'>Stability</h1>
                                We ensure stable infrastructure
                            </div>
                        </div>
                        <div className='flex space-x-4 items-start m-4 md:flex-col md:space-x-0 md:space-y-2 md:p-2'>
                            <div>
                                <PresentationChartBarIcon className='w-14 h-14 lg:w-20 lg:h-20 shadow-md rounded-md border-2 border-gray-400 p-2' />
                            </div>
                            <div className='text-base font-medium text-gray-800'>
                                <h1 className='font-extrabold text-lg capitalize tracking-tight text-master_blue'>Scalability</h1>
                                Your application is easy to scale
                            </div>
                        </div>
                        <div className='flex space-x-4 items-start m-4 md:flex-col md:space-x-0 md:space-y-2 md:p-2'>
                            <div>
                                <ServerIcon className='w-14 h-14 lg:w-20 lg:h-20 shadow-md rounded-md border-2 border-gray-400 p-2' />
                            </div>
                            <div className='text-base font-medium text-gray-800'>
                                <h1 className='font-extrabold text-lg capitalize tracking-tight text-master_blue'>CI/CD</h1>
                                At any time, a stable version of your app is live.
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col h-auto md:flex-row md:items-center mt-16 lg:mt-0 min-h-screen'>
                    <div className='font-bold text-gray-600 w-full lg:w-3/5 md:w-2/4 md:-mt-20'>
                        <h1 className='font-extrabold capitalize text-3xl sm:text-5xl text-master_blue mb-4 tracking-tight'>Why us ?</h1>
                        <p className='mb-4 mt-8 leading-8 text-lg sm:text-2xl tracking-wide'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime obcaecati praesentium quod vel! Ducimus harum rem in.
                        </p>
                        <p className='my-4 leading-8 text-lg sm:text-2xl tracking-wide'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur in quia laborum tempora itaque aspernatur facilis nobis possimus, iusto ab nemo saepe odio maxime ullam.
                        </p>
                    </div>
                    <div className='lg:w-2/5 md:w-2/4'>
                        <img src={WUs} alt="Why Us" className='object-fill' />
                    </div>
                </div>


            </div>

            {/* Tabs */}
            <div className='w-full p-4 lg:py-12 8 lg:px-8 mx-auto min-h-screen'>
                <Tab.Group as='div' className='m-2 relative w-full h-full block'>
                    <div className='shadow-md p-1 mx-auto max-w-screen-md rounded-r-full rounded-l-full h-10 bg-gray-50'>
                        <Tab.List className='flex justify-between items-center'>
                            <Tab key='cheap' as={Fragment} >
                                {({ selected }) => (
                                    <button className={
                                        selected
                                            ? 'animate-bounce transition-all pl-3 text-gray-600 duration-200'
                                            : 'text-master_blue'
                                    }>
                                        <CurrencyDollarIcon className='h-8 w-8' />
                                    </button>
                                )}
                            </Tab>
                            <Tab key='fast' as={Fragment} >
                                {({ selected }) => (
                                    <button className={
                                        selected
                                            ? 'animate-bounce transition-all pl-3 text-gray-600 duration-200'
                                            : 'text-master_blue'
                                    }>
                                        <LightningBoltIcon className='h-8 w-8' />
                                    </button>
                                )}
                            </Tab>
                            <Tab key='team' as={Fragment} >
                                {({ selected }) => (
                                    <button className={
                                        selected
                                            ? 'animate-bounce transition-all pr-3 text-gray-600 duration-200'
                                            : 'text-master_blue'
                                    }>
                                        <UserGroupIcon className='h-8 w-8' />
                                    </button>
                                )}
                            </Tab>
                            <Tab key='diversity' as={Fragment} >
                                {({ selected }) => (
                                    <button className={
                                        selected
                                            ? 'animate-bounce transition-all pr-3 text-gray-600 duration-200'
                                            : 'text-master_blue'
                                    }>
                                        <TemplateIcon className='h-8 w-8' />
                                    </button>
                                )}
                            </Tab>
                            <Tab key='timing' as={Fragment} >
                                {({ selected }) => (
                                    <button className={
                                        selected
                                            ? 'animate-bounce transition-all pr-3 text-gray-600 duration-200'
                                            : 'text-master_blue'
                                    }>
                                        <ClockIcon className='h-8 w-8' />
                                    </button>
                                )}
                            </Tab>

                        </Tab.List>
                    </div>
                    <Tab.Panels as={Fragment}>
                        {/* Cheap Content 1 */}
                        <div className='mt-8'>

                            <Tab.Panel className='w-full max-w-screen-lg mx-auto bg-transparent text-black px-4 py-2'>
                                <div class="relative">
                                    <div class="absolute inset-0 bg-gradient-to-r from-master_blue rounded-xl to-black shadow-lg transform -skew-y-3 sm:skew-y-0 sm:-rotate-3" />
                                    <div className='lg:mx-4'>
                                        <div class="relative bg-white rounded-xl shadow-lg p-4">
                                            <h1 className='text-xl uppercase font-extrabold lg:text-3xl text-center py-2'>Affordable</h1>
                                            <p className='leading-relaxed'>
                                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum dicta consectetur vero cum similique sit. Fugit earum itaque aut tempore illum nemo aliquam sunt eaque ipsa, commodi optio exercitationem excepturi eveniet harum veritatis amet quidem repudiandae enim eius distinctio ipsam.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Panel>
                            {/* Fast Content 2 */}
                            <Tab.Panel className='w-full max-w-screen-lg mx-auto bg-transparent text-black px-4 py-2'>
                                <div class="relative">
                                    <div class="absolute inset-0 bg-gradient-to-r from-master_blue rounded-xl to-black shadow-lg transform -skew-y-3 sm:skew-y-0 sm:-rotate-3" />
                                    <div className='lg:mx-4'>
                                        <div class="relative bg-white rounded-xl shadow-lg p-4">
                                            <h1 className='text-xl font-extrabold uppercase lg:text-3xl text-center py-2'>Fast</h1>
                                            <p className='leading-relaxed'>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores reprehenderit cupiditate, blanditiis vitae facilis eveniet vel sunt eligendi eos cumque repellat atque tempora assumenda asperiores!
                                            </p>
                                            <ul class="list-disc space-y-2 mt-2">
                                                <li class="flex items-start">
                                                    <span class="h-6 flex items-center sm:h-7">
                                                        <svg class="flex-shrink-0 h-5 w-5 text-master_blue" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    <p class="ml-2 font-medium">
                                                        Prototype
                                                    </p>
                                                </li>
                                                <li class="flex items-start">
                                                    <span class="h-6 flex items-center sm:h-7">
                                                        <svg class="flex-shrink-0 h-5 w-5 text-master_blue" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    <p class="ml-2 font-medium">
                                                        Brainstorm
                                                    </p>
                                                </li>
                                                <li class="flex items-start">
                                                    <span class="h-6 flex items-center sm:h-7">
                                                        <svg class="flex-shrink-0 h-5 w-5 text-master_blue" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                                        </svg>
                                                    </span>
                                                    <p class="ml-2 font-medium">
                                                        Design & Wireframe
                                                    </p>
                                                </li>
                                            </ul>
                                            {/* Display Icons from the Webmaster design in sort of timeline */}
                                        </div>
                                    </div>
                                </div>
                            </Tab.Panel>
                            {/* Team Content 3 */}
                            <Tab.Panel className='w-full max-w-screen-lg mx-auto bg-transparent text-black px-4 py-2'>
                                <div class="relative">
                                    <div class="absolute inset-0 bg-gradient-to-r from-master_blue rounded-xl to-black shadow-lg transform -skew-y-3 sm:skew-y-0 sm:-rotate-3" />
                                    <div className='lg:mx-4'>
                                        <div class="relative bg-white rounded-xl shadow-lg p-4">
                                            <h1 className='text-xl font-extrabold lg:text-3xl text-center py-2'>Team</h1>
                                            <div className='flex flex-col md:space-x-4 md:grid md:grid-cols-2'>
                                                {/* Listing Team Members */}

                                                <TeamCard
                                                    name='Jonathan M. NDAO'
                                                    title='CTO & Senior Dev'
                                                    img={Me}
                                                />

                                                <TeamCard
                                                    name='Abdou Akhad Top'
                                                    title='Manager & Senior Dev'
                                                    img={Me}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Panel>
                            {/* Flexibility Content 4 */}
                            <Tab.Panel className='w-full max-w-screen-lg mx-auto bg-transparent text-black px-4 py-2'>
                                <div class="relative">
                                    <div class="absolute inset-0 bg-gradient-to-r from-master_blue rounded-xl to-black shadow-lg transform -skew-y-3 sm:skew-y-0 sm:-rotate-3" />
                                    <div className='lg:mx-4'>
                                        <div class="relative bg-white rounded-xl shadow-lg p-4">
                                            <h1 className='text-xl font-extrabold lg:text-3xl text-center py-2'>Flexibility</h1>
                                            <p className='leading-relaxed'>
                                                <span className='font-extrabold text-master_blue text-xl block capitalize'>Lorem ipsum dolor sit amet,</span> consectetur adipisicing elit. Maxime reiciendis sit tenetur corrupti, minima sunt omnis quo blanditiis, fugiat est mollitia itaque repellendus enim cumque eos. Possimus aspernatur rerum magnam ullam. Laudantium quo esse tempore?
                                            </p>
                                            <div className='flex justify-evenly items-center my-4'>
                                                <img src={reactSVG} alt='programming' className='w-12 h-12' />
                                                <img src={nodejs} alt='programming' className='w-12 h-12' />
                                                <img src={HTML5} alt='programming' className='w-12 h-12' />
                                                <img src={CSS} alt='programming' className='w-12 h-12' />
                                                <img src={django} alt='programming' className='w-12 h-12' />
                                                <img src={electronjs} alt='programming' className='w-12 h-12' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Panel>
                            {/* Timing Content 5 */}
                            <Tab.Panel className='w-full max-w-screen-lg mx-auto bg-transparent text-black px-4 py-2'>
                                <div class="relative">
                                    <div class="absolute inset-0 bg-gradient-to-r from-master_blue rounded-xl to-black shadow-lg transform -skew-y-3 sm:skew-y-0 sm:-rotate-3" />
                                    <div className='lg:mx-4'>
                                        <div class="relative bg-white rounded-xl shadow-lg p-4">
                                            <h1 className='text-xl font-extrabold lg:text-3xl text-center py-2'>Timing</h1>
                                            <div className='flex flex-col md:flex-row md:justify-between m-2 md:items-center'>
                                                <div className='lg:w-2/3 md:w-2/4'>
                                                    <span className='font-bold text-3xl text-master_blue tracking-tight mb-1 block'>Time matters</span>
                                                    <p className='leading-relaxed text-sm lg:text-lg'>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis veniam accusantium recusandae inventore enim, aliquam pariatur cupiditate dignissimos sequi amet aspernatur magnam minus suscipit cum.
                                                    </p>
                                                </div>
                                                <div className='lg:w-3/5 md:w-2/4'>
                                                    <img src={deliverySVG} alt='Delivery' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Panel>
                        </div>
                    </Tab.Panels>
                </Tab.Group>
            </div>

            {/* Showcase */}
            <div className='w-full mt-16 mx-auto h-full min-h-screen'>
                <div className='w-11/12 md:w-4/5 mx-auto md:ml-16 h-auto text-lg sm:text-2xl font-medium leading-8 tracking-wide text-gray-600 my-8'>
                    <h1 className='font-extrabold text-3xl sm:text-5xl capitalize tracking-tight text-master_blue my-4'>
                        Check some of our latest works.
                    </h1>

                    <p className='mt-8 mb-2'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore consequuntur voluptas, vel nesciunt harum omnis aut porro et unde vero!
                    </p>
                    <p className='mb-2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ducimus repellat possimus culpa dolore voluptate?
                    </p>
                </div>

                <div className='h-auto py-4 flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-5 justify-between items-center mx-auto w-10/12 sm:w-11/12'>

                    <CardWeb imgURL={BAC} url='https://www.example.com' />
                    <CardWeb imgURL={BAC} url='https://www.example.com' />
                    <CardWeb imgURL={BAC} url='https://www.example.com' />
                    <CardWeb imgURL={BAC} url='https://www.example.com' />

                </div>
            </div>

            {/* Section Features */}
            <div className='w-full h-full mx-4 mt-16 min-h-screen'>

                <div className='w-11/12 md:w-4/5 mx-auto md:ml-16 h-auto text-lg sm:text-2xl font-medium leading-8 tracking-wide text-gray-600 my-10'>
                    <h1 className='font-extrabold text-3xl sm:text-5xl capitalize tracking-tight bg-clip text-master_blue my-4'>
                        We keep growing: new features.
                    </h1>

                    <p className='mt-8 mb-2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam est nam itaque ullam repudiandae praesentium voluptate explicabo repellendus doloribus voluptates?
                    </p>
                </div>

                {/* Grid of new features */}
                <div>
                    <div className='w-11/12 mx-auto'>
                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center p-4 m-4 h-full gap-5 '>
                            <FeatureCard imgUrl={amazon_aws} name="Amazon AWS" url='https://www.example.com' />
                            <FeatureCard imgUrl={youtube} name="Youtube Channel" url='https://www.example.com' />
                            <FeatureCard imgUrl={nextjs} name="Next JS" url='https://www.example.com' />
                        </div>
                    </div>
                </div>

            </div>

            {/* Section Testimonials */}

            <div className='relative'>

                {/* <div className='absolute top-2/3 md:top-1/2 left-0 bottom-0 right-0 bg-gradient-to-b from-blue-300 to-transparent w-full h-full' /> */}

                <div className='w-full mx-4 mt-16 min-h-screen'>

                    <div className='text-center w-full py-4'>
                        <span className='text-master_blue font-extrabold text-3xl md:text-5xl block tracking-wide mb-4'>Testimonials</span>
                        <div className='font-medium text-lg md:text-2xl text-gray-400 w-4/5 md:w-full mx-auto leading-relaxed pt-2'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est saepe voluptas fugiat.
                        </div>
                    </div>
                    <AliceCarousel
                        disableButtonsControls={true}
                        disableDotsControls={true}
                        autoPlay={true}
                        autoPlayInterval={5000}
                        animationDuration={800}
                        infinite={true}
                        responsive={{
                            0: { items: 1 },
                            568: { items: 1 },
                            1024: { items: 1 },
                        }}
                    >
                        <TestimonialCard
                            img={Me}
                            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequuntur repudiandae modi aspernatur facilis esse beatae. Quas quidem facere dicta."
                            company="Masterweb"
                            name="Jonathan M. NDAO"

                        />
                        <TestimonialCard
                            img={Me}
                            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequuntur repudiandae modi aspernatur facilis esse beatae. Quas quidem facere dicta."
                            company="Masterweb"
                            name="Jonathan M. NDAO"

                        />
                    </AliceCarousel>
                </div>
            </div>

            {/* Section Partners */}
            <div className='w-11/12 p-4 mx-auto'>
                <div className='w-full md:w-4/5  h-auto text-lg sm:text-2xl font-medium leading-8 tracking-wide text-gray-600 my-8'>
                    <h1 className='font-extrabold text-3xl sm:text-5xl capitalize tracking-tight bg-clip text-master_blue my-4'>
                        Our amazing partners.
                    </h1>
                    <p className='mt-8 mb-2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, dicta voluptatem reiciendis culpa earum illo.
                    </p>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
                    <PartnerCard
                        img={konyLogo}
                        url='https://www.example.com'
                        name='Kony'
                    />
                    <PartnerCard
                        img={mashableLogo}
                        url='https://www.example.com'
                        name='Mashable'
                    />
                    <PartnerCard
                        img={bbtLogo}
                        url='https://www.example.com'
                        name='BB&T'
                    />
                    <PartnerCard
                        img={natsio}
                        url='https://www.example.com'
                        name='Natsio'
                    />
                </div>
            </div>

            {/* Footer */}
            <Footer />


        </div>
    )
}

export default HomeMasterweb;
