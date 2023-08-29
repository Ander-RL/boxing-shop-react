import { Outlet } from 'react-router-dom';
import { Fragment } from 'react';

import Navbar from '../components/Layout/Toolbar/Navbar';
import Footer from '../components/Layout/Footer/Footer';

function RootPage() {
    return (
        <Fragment>

            <Navbar />
        
            <Outlet />

            <Footer />

        </Fragment>
    );
}

export default RootPage;