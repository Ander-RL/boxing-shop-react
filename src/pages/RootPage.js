import { Outlet } from 'react-router-dom';
import { Fragment } from 'react';

import Navbar from '../components/Layout/Toolbar/Navbar';
import Footer from '../components/Layout/Footer/Footer';

function RootPage() {
    return (
        <Fragment>

            <Navbar />
            <div className='d-flex flex-column min-vh-100 overflow-auto'>

                <Outlet />

                <Footer />
            </div>

        </Fragment>
    );
}

export default RootPage;