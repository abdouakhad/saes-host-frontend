import React from 'react';

function Approach(props){
    return (
        <>
            <div className="cardApproach relative text-white mb-10 md:pl-16 pl-8">
                <h1 className = 'absolute text-5xl font-black text-white text-opacity-40'> {props.count} </h1>
                <div className= 'pt-5 approach-text sm:px-8 px-4'>
                    <h2 className = 'font-black text-2xl'>{props.title}</h2>
                    <p className = 'pt-5'>
                        {props.text}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Approach;