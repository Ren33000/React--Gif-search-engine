/* eslint-disable indent */
import React from 'react';

const Gif = (props) => {
    const { gifID } = props;

    const handleClick = () => {
        setSelectedGif(gifID);
    };

    const url =`https://media.giphy.com/media/${gifID}/giphy.gif`
    return (
         <img src={url} alt="" className="gif"  onClick={handleClick}/>
    );
};

export default Gif;