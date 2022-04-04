import React from 'react';

import './navbar.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListIcon from '@mui/icons-material/List';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="navbar__container">
                <div className="navbar__search">
                    <input type="search" placeholder="جستجو..."/>
                    <SearchOutlinedIcon/>
                </div>
                <div className="navbar__items">
                    <div className="navbar__item">
                        <DarkModeIcon />
                    </div>
                    <div className="navbar__item">
                        <FullscreenExitIcon />
                    </div>
                    <div className="navbar__item">
                        <NotificationsIcon />
                        <div className="navbar__count">3</div>
                    </div>
                    <div className="navbar__item">
                        <ChatBubbleOutlineIcon />
                        <div className="navbar__count">1</div>
                    </div>
                    <div className="navbar__item">
                        <ListIcon />
                    </div>
                    <div className="navbar__item">
                        <LanguageIcon />
                        Fa
                    </div>
                    <div className="navbar__profile">
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
