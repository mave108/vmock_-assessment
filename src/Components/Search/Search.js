import React from 'react';

const Search = (props) =>{

    return (
        <nav className="navbar navbar-light bg-light">
        <form className="form-inline">
          <input className="form-control mr-sm-2" onChange={(e)=> props.searchHandler(e.target.value)} type="search" placeholder="Search" aria-label="Search" />          
        </form>
      </nav>
    );
}

export default Search;