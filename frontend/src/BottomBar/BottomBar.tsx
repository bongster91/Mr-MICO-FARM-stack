import React from 'react';

import BottomBarSurface from './BottomBarSurface';
import { bottomBarItems } from './types';
import BottomBarItem from './BottomBarItem';

function BottomBar() {
    return (
        <BottomBarSurface>
            {
                bottomBarItems.map((item, index) => {
                    return (
                        <BottomBarItem 
                            key={index}
                            item={item}
                        />
                    );
                })
            }
        </BottomBarSurface>
    );
}

export default BottomBar;