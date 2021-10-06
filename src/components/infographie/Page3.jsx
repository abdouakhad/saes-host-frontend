import React from 'react';
import AboutCard from './AboutCard'
import about1 from '../../svg/8-Design community-amico.svg'
import about2 from '../../svg/9-Design community-pana.svg'
import about3 from '../../svg/10-Team spirit-pana.svg'

var text1 = "Lorem ipsum Infography dolor sit amet, Infography elit, sed do eiusmod incididunt ut la. Lorem ipsumdolor sit consectetur."
var text2 = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque."
var text3 = " Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius."


function Page3(){
    return (
        <div className="About">
            <div class="bg-jaune py-8 text-center">
                <div class="content lg:7/12 md:w-8/12 w-11/12 m-auto">
                    <h1 id='about' class='text-3xl font-bold mb-4 special'>
                        About Us
                    </h1>
                    <p class='font-semi-bold text-xl tracking-wide'>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                        deleniti atque corrupti quos dolores.
                    </p>
                </div>
            </div>
            <div class=" mt-9 text-black my-8 py-3 gap-3 grid md:grid-cols-3 lg:w-11/12 md:w-11/12 m-auto">
            <AboutCard img = {about1} text = {text1}/>
            <AboutCard img = {about2} text = {text2}/>
            <AboutCard img = {about3} text = {text3}/>
            </div>
            
            <div class="info lg:w-6/12 md:w-7/12 w-10/12 bg-black shadow-inner m-auto mt-10 rounded-lg">
                <p class='special text-center font-bold text-xl  tracking-widest text-jaune lg:px-5 md:px-2 py-5 mb-10 '>
                    latest projects
                </p>
            </div>
        </div>
    )
}
export default Page3;