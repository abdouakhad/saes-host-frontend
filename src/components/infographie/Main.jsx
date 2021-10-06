import React from 'react';
import mainDesign from '../../svg/4-Design inspiration-bro.svg'
import arrowDown from '../../svg/arrow-circle-down-solid.svg'

function Main(){
    return(
        <>
            <div class="container lg:w-10/12 md:w-11/12 m-auto mt-20 items-center">
                <div class="info lg:w-5/12 md:w-5/12 w-7/12 bg-jaune shadow-inner m-auto mt-10 rounded">
                    <p class='special text-center font-thin text-3xl  tracking-base text-black  lg:px-5 md:px-2 py-4'>
                        infographie senegal
                    </p>
                </div>
            {/* Main Section  */}
                <div class="iconbig mt-7 grid md:grid-cols-2 grid-cols-1 justify-center gap-2 items-center">
                    {/* <!-- big icon section --> */}
                    <div class="animated-icon lg:w-96 w-80 justify-self-center">
                        <img src= {mainDesign} alt = 'design inspiration' />
                    </div>
                    {/* <!-- big text section --> */}
                    <div class="lorem mt-4 self-center px-3 md:px-0">
                        <p class='lg:text-6xl md:text-5xl text-5xl font-black text-jaune tracking-widest'>LOREM
                            IPSUM</p>
                        <p class='leading-loose text-lg mt-3 font-semibold text-white '>Lorem ipsum dolor sit
                            amet, Infography
                            adipiscing elit,
                            sed do eiusmod <span class='text-jaune'>Logo</span> incididunt ut la. Lorem ipsum dolor sit amet
                            <span class='text-jaune'> consectetur </span>
                            adipisicing elit.
                            Dolorum, debitis.
                        </p>
                    </div>
                </div>
                <div className = 'btn-down py-4 flex justify-center'  >
                    <a href = '#next' ><img id = 'next' className = 'w-12 cursor-pointer' src = {arrowDown} alt = 'arrow circled' /></a>
                </div>
            </div>
        </>
    )
}

export default Main;