import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Navigation from './NavBar';
import Sidebar from './Sidebar';
import '../styles/Main.module.css';
const Main = ({ children = null, fullPage = false, title=null, description="default page description" }) => (
    <HelmetProvider>
        <Helmet
            titleTemplate="%s | My Personal Website"
            defaultTitle="My Personal Website"
            defer={false}
        >
            {title && <title>{title}</title>}
            <meta name="description" content={description} />
        </Helmet>
        <div id="wrapper">
            <Navigation />
            {fullPage ? null : <Sidebar />}
            <div id="main">
                {children}
            </div>

        </div>
    </HelmetProvider>
);

Main.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    fullPage: PropTypes.bool,
    title: PropTypes.string,
    description: PropTypes.string,
};

export default Main;