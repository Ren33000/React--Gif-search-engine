/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React, {useState} from 'react';

import Gif from './Gif';
import GifList from './GifList';
import SearchBar from './SearchBar';

const giphy = require('giphy-api')({
  apiKey: '5WHGVBiL6dgD2R7ebfAOkMC0nE08dlk6',
  https: true
});

const App = () => {
    const [selectedGif, setSelectedGif] = useState("13UZisxBxkjPwI");
    const [gifList, setGifList] = useState(["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"]);

    const searchGiphy =(keyword) => {
        giphy.search({
            q: keyword,
            rating: 'g',
            limit: 10
            }, (err, res) => {
            const gifIdArray = res.data.map((gif) =>gif.id)
            });
    }
    return (
        <div>
            <div className="left-scene">
                <SearchBar />
                <div className="selected-gif">
                    <Gif gifID={selectedGif} />
                </div>
            </div>
            <div className="right-scene">
                <GifList gifIDs={gifList} setSelectedGif={setSelectedGif} />

            </div>
        </div>
    );
};

export default App;