import React from 'react';

import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Widgets from '../../components/widgets/Widgets';

import './home.css';

const Home = () => {
    return (
        <div className="home">
            <Sidebar/>
            <div className="homeContainer">
                <Navbar/>
                <div className='widgets__container'>
                    <Widgets type="کاربرها"/>
                    <Widgets type="سفارش ها"/>
                    <Widgets type="کیف پول"/>
                    <Widgets type="پیام ها"/>
                </div>
                <div cl></div>
            </div>
        </div>
    );
}

export default Home;
