import React from 'react';

const Gif = (props) => {
  const { gifId, changeSelectGif } = props;
  const url = `https://media.giphy.com/media/${gifId}/giphy.gif`;
  const handleClick = () => {
    changeSelectGif(gifId);
  };
  return (
    <img src={url} alt="gif" className="gif" onClick={handleClick} />
  );
};

export default Gif;

// import React from 'react';

// const Gif = (props) => {
//     const { gifID } = props;

//     const handleClick = () => {
//         setSelectedGif(gifID);
//     };

//     const url =`https://media.giphy.com/media/${gifID}/giphy.gif`
//     return (
//          <img src={url} alt="" className="gif"  onClick={handleClick}/>
//     );
// };

// export default Gif;