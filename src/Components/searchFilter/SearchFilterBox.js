import React, { useRef } from 'react'
import "../searchFilter/SearchFilterBox.css";
import  searchIcon  from "../assets/images/icon-search.svg";
import  closeButtonIcon  from "../assets/images/close-btn.svg";


const SearchInput = () => {
    const searchInput = useRef();
    const closeButton = useRef();
    
    
    const handleCloseButton = () => {
    searchInput.current.value = '';
    }
    
    const handleCloseBtnDefaultBehaviour = (e) => {
        e.preventDefault();
    }

    return (
    <div className="form">
        <img
        src={searchIcon}
        alt="search filter icon"
        className="search-icon"
        />
        <input
        ref={searchInput}
        type="text"
        placeholder="Filter by description.."
        className="search-input"
        />
        <button
        ref={closeButton}
        className="close-btn"
        onClick={handleCloseButton}
        onMouseDown={handleCloseBtnDefaultBehaviour}
        >
        <img
            src={closeButtonIcon}
            alt="close button search filter icon"
            className="close-btn-icon"
        />
        </button>
    </div>
    );
}


const AddButton = () => {
    return (
    <div className="add-button">
        <button>+ Add Task</button>
    </div>
    );
}


const SearchFilterBox = () => {
    return (
    <div className='search-filter-box'>
        <SearchInput />
        <AddButton />
    </div>
    );
}

export default SearchFilterBox;
