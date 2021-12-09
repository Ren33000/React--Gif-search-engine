import React, { useState } from 'react';

import SearchBar from './SearchBar';
import GifList from './GifList';
import Gif from './Gif';

const giphy = require('giphy-api')({
  apiKey: '5WHGVBiL6dgD2R7ebfAOkMC0nE08dlk6',
  https: true
});

const App = () => {
  const [gifIdSelected, setGifIdSelected] = useState("gSotjAQJmPTJm");
  const [giIdList, setGiIdList] = useState(["l4KhSJHxdD7Mk1vt6", "1xONIE9kieqf4VTX50", "WuGSL4LFUMQU","MQEBfbPco0fao", "3ohhwvhGWJwsmhnR6w", "3oKIPyn8SKfUVOzEsM", "HuVCpmfKheI2Q","3o8doT5DaMjfH3paHC",  "u6uAu3yyDNqRq"]);
  const fetchGiphy = (keyword) => {
    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      setGiIdList(res.data.map((gif) => gif.id));
    });
  };
  const changeSelectGif = (newSelectedGifId) => {
    setGifIdSelected(newSelectedGifId);
  };

  return (
    <div>
      <div className="left-scene">
        <SearchBar fetchGiphy={fetchGiphy} />
        <div className="selected-gif">
          <Gif gifId={gifIdSelected} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifIdList={giIdList} changeSelectGif={changeSelectGif} />
      </div>
    </div>
  );
};

export default App;




// import React, {useState} from 'react';

// import Gif from './Gif';
// import GifList from './GifList';
// import SearchBar from './SearchBar';

// const giphy = require('giphy-api')({
//   apiKey: '5WHGVBiL6dgD2R7ebfAOkMC0nE08dlk6',
//   https: true
// });

// const App = () => {
//     const [selectedGif, setSelectedGif] = useState("13UZisxBxkjPwI");
//     const [gifList, setGifList] = useState(["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"]);

//     const searchGiphy =(keyword) => {
//         giphy.search({
//             q: keyword,
//             rating: 'g',
//             limit: 10
//             }, (err, res) => {
//             const gifIdArray = res.data.map((gif) =>gif.id)
//             });
//     }
//     return (
//         <div>
//             <div className="left-scene">
//                 <SearchBar />
//                 <div className="selected-gif">
//                     <Gif gifID={selectedGif} />
//                 </div>
//             </div>
//             <div className="right-scene">
//                 <GifList gifIDs={gifList} setSelectedGif={setSelectedGif} />

//             </div>
//         </div>
//     );
// };

// export default App;