import React from 'react';
import Sponsered from '../Miscellanous/MiscCards/Sponsered';
import DebitCard from '../Miscellanous/MiscCards/DebitCard';
import MiscCards from '../Miscellanous/MiscCards';

function SideBar() {
    return (
        <div className='sidebar' style={{gridColumn: '2/3', display: 'grid', gridTemplateColumns: '2 1fr'}}>
            <MiscCards />
        </div>
    );
}

export default SideBar;