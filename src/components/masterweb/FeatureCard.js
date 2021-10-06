import React from "react";

const FeatureCard = ({ imgUrl, name, url }) => {
  return (
    <div className="w-full max-h-48 flex flex-col space-y-2 m-2 p-2 hover:text-gray-300 cursor-pointer">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={imgUrl} alt={name} className="w-full h-2/3" />
        <p className='my-2 text-base sm:text-lg text-center font-medium'>
          {name}
        </p>
      </a>
    </div>
  );
};

export default FeatureCard;
