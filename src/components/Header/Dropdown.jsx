import React, { useState } from 'react';
import DropdownIcon from './images/dropdown-icon.svg';
import { Link } from 'react-router-dom';

function Dropdown() {
    // State to track the visibility of the dropdown
    const [display, setDisplay] = useState(false);

    // Function to toggle the display state
    const toggleDropdown = () => {
        setDisplay(!display);
    };

    return (
        <div className='px-2 relative flex flex-col justify-center items-center'>
            {/* Button to toggle the dropdown menu */}
            <button onClick={toggleDropdown} className='flex items-center gap-1'>
                <div>Dropdown</div>
                <img src={DropdownIcon} className='h-2' alt='Dropdown Icon' />
            </button>

            {/* Dropdown menu */}
            <div className={`absolute top-8 bg-teal-700 ${display ? 'flex' : 'hidden'} flex-col items-center justify-center`} id='dropdown-container'>
                <Link to='/tips' className='px-2 py-1 w-full text-center text-white hover:bg-teal-800'>Tips</Link>
                <Link to='/tips' className='px-2 py-1 w-full text-center text-white hover:bg-teal-800'>Tipfhewfoes</Link>
                <Link to='/tips' className='px-2 py-1 w-full text-center text-white hover:bg-teal-800'>Tidkfndkvps</Link>
                <Link to='/tips' className='px-2 py-1 w-full text-center text-white hover:bg-teal-800'>Tips</Link>
            </div>
        </div>
    );
}

export default Dropdown;
