import React from 'react';

function AboutCard(props){
    return (
        <div >
            <div class="first flex flex-col justify-center items-center ">
                <div class="svg lg:w-64 md:w-56 w-64 h-64">
                    <img className = 'object-cover h-full' src = {props.img } alt = 'design process'/>
                </div>
            </div>
            <p class='text-center md:w-11/12 w-9/12 m-auto tracking-wide'>
                {props.text}
            </p>
            
        </div>
    )
}

export default AboutCard;