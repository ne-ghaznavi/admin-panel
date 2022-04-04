import React from 'react';

import './sidebar.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo">Developer01</span>
            </div>
            <hr/>
            <div className="center">
                <ul>
                    <li>
                        <DashboardIcon/>
                        <span>خانه</span>
                    </li>
                    <li>
                        <PersonOutlineOutlinedIcon/>
                        <span>کاربران</span>
                    </li>
                    <li>
                        <StoreMallDirectoryIcon/>
                        <span>محصولات</span>
                    </li>
                    <li>
                        <Inventory2OutlinedIcon/>
                        <span>سفارش ها</span>
                    </li>
                    <li>
                        <CreditCardIcon/>
                        <span>ارسال شده ها</span>
                    </li>
                    <li>
                        <InsertChartIcon/>
                        <span>تیکت ها</span>
                    </li>
                    <li>
                        <NotificationsActiveIcon/>
                        <span>گزارشات</span>
                    </li>
                    <li>
                        <SettingsIcon/>
                        <span>تنظیمات</span>
                    </li>
                    <li>
                        <AccountBoxIcon/>
                        <span>پروفایل</span></li>
                    <li>
                        <ExitToAppIcon/>
                        <span>خروج</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">color option</div>
        </div>
    );
}

export default Sidebar;
