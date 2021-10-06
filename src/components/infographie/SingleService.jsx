import React from "react";



function SingleService(props){
    return (

        <div class="first">
            <img class='md:w-6/12 w-3/12 m-auto' src = {props.img} alt = 'Services' />
            <p class='leading-loose mt-2 tracking-wider' >
            {props.text}
            </p>
        </div>
    )
}

export default SingleService;