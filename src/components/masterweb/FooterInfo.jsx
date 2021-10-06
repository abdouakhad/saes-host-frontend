import React from 'react';

const date = new Date();
var year = date.getFullYear();

function FooterInfo(){
    return (
        <div className="footer py-8 text-white text-center mt-5">
            <p className = 'special'> Copyright &copy; {year}</p>
        </div>
    )
}

export default FooterInfo;