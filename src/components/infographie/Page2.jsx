import React, {useState} from 'react';
import design1 from '../../svg/6-Creation process-cuate.svg'
import design2 from '../../svg/7-2-Design Process-rafiki.svg'
import img from '../../img/canva.svg'
import img1 from '../../img/figma.svg'
import img2 from '../../img/adobe-photoshop.svg'
import img3 from '../../img/after-effects-cc.svg'

import img4 from '../../img/adobe-illustrator-cs6.svg'

import Skills from './Skills'
// import '../../src/styles.css'
import '../../../src/styles.css'



function Page2(){
    

    return (
        <div id = 'next' className=" page2 min-h-screen mt-9 text-black">
            <div className=" w-78 text-center m-auto">
                <h2 className='md:text-5xl text-3xl font-extralight special leading-relaxed px-5'>
                    What can <span className="font-bold text-jaune">Inforgraphie Sn</span> do for you?
                </h2>
            </div>
            <div
            className="icon-little-big md:text-3xl md:text-left text-center my-10 items-center  md:w-11/12 m-auto  grid md:grid-cols-2  gap-2">
                <div className="the-svg w-96 justify-self-center">
                    <img src = {design1} alt = 'design' />
                </div>
                <div className="text-xl leading-loose tracking-widest font-light w-11/12 m-auto ">
                    <p className= ''>Lorem ipsum dolor sit amet, Infography elit,
                        <span className="text-jaune font-black">Logo</span> incididunt ut la.
                        <span className="text-jaune font-black">Dolorum</span>, debitis...
                    </p>
                </div>
                <div className="text-xl leading-loose tracking-widest font-light w-11/12 m-auto  md:order-3 order-last">
                    <p>Lorem ipsum <span className="text-jaune font-black">Infography</span>
                        dolor sit amet, Infography elit,

                        adipisicing elit. debitis.
                        Sed <span className="text-jaune font-black">Designers</span>.
                    </p>
                </div>
                <div className="the-svg w-96 justify-self-center md:order-last order-3">
                    <img src = {design2} alt = 'design' />
                </div>
            </div>
            <div class="info lg:w-4/12 md:w-5/12 w-7/12 bg-black shadow-inner m-auto mt-10 rounded-lg">
                <p class='special text-center font-bold text-3xl  tracking-widest text-jaune lg:px-5 md:px-2 py-4'>
                    tools we use
                </p>
            </div>
            <div className="containers">
                <Skills  count = '1' name = 'canvas' img = {img} />
                <Skills count = '2' name = 'figma' img = {img1} />
                <Skills count = '3' name = 'photoshop' img = {img2} />
                <Skills count = '4' name = 'after effects' img = {img3} />
                <Skills count = '5' name = 'illustrator' img = {img4} />
                <div className="card">
                    <div className="box bg-yellow">
                        <div className="content flex flex-col justify-center items-center">
                            <h2 className="content2">6</h2>
                            <h3 className=' special w-8/12 h-48 self-center mt-7 tracking-widest capitalize'>Many More</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Page2;

