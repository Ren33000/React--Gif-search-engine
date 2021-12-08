/* eslint-disable react/jsx-indent */
import React from 'react';

const SearchBar = (props) => {
    const { searchGiphy } = props;
    const handleChange = (event) => {
        searchGiphy(event.)
    }
    return (
        <input type="text" className="form-search form-control" />
    );
};

export default SearchBar;