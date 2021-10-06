import React from 'react';
import '../../../src/styles.css'

var value = 0; 
function Skills(props){

    return( 
        <>

            <div className="card">
                <div className="box">
                <div className="content flex flex-col justify-center items-center leading-3 pt-5">
                    <h2>{props.count}</h2>
                    <h3 className='tracking-widest'>{props.name}</h3>
                    <img src = {props.img} alt = 'tools' className="w-8/12 h-48 self-center" />
                    {/* <a href="#id">Read More</a> */}
                </div>
                </div>
            </div>
        </>
    ) 
}

export default Skills;