import React from 'react';

const SearchBar = (props) => {
  const handleChange = (event) => {
    const { fetchGiphy } = props;
    fetchGiphy(event.currentTarget.value);
  };
  return (
    <input className="form-search form-control" type="text" placeholder="Search for a gif" onChange={handleChange} />
  );
};

export default SearchBar;

// import React from 'react';

// const SearchBar = (props) => {
//     const { searchGiphy } = props;
//     const handleChange = (event) => {
//         searchGiphy(event.)
//     }
//     return (
//         <input type="text" className="form-search form-control" />
//     );
// };

// export default SearchBar;