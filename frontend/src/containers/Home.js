import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Cards from '../components/Cards';
import ListingForm from '../components/ListingForm';
import Listings from '../components/Listings';
import Pagination from '../components/Pagination';


const Home = () => {

    const [listings, setListings] = useState([]);
    const [currntPage, setCurrntPage] = useState(1);
    const [listPerPage, setListPerPage] = useState(3);
    const [activePage, setActivePage] = useState(1);

    const indexOfLastListing = currntPage * listPerPage;
    const indexOfFirstListing = indexOfLastListing - listPerPage;
    const currntListings = listings.slice(indexOfFirstListing, indexOfLastListing)

    const visitPage = (page) => {
        setCurrntPage(page);
        setActivePage(page);
    };

    const prev_page_number = () => {
        if (currntPage !== 1) {
            setCurrntPage(currntPage - 1);
            setActivePage(currntPage - 1);
        };
    };

    const next_page_number = () => {
        if (currntPage === Math.ceil(listings.length / 3)) {
            setCurrntPage(currntPage + 1);
            setActivePage(currntPage + 1);
        };
    };

    return (
        <>
            <main className='home_page'>
                <Helmet>
                    <title>Realest Society | Home</title>
                    <meta content='Realest Society Home Page' name='description' />
                </Helmet>
                
                <section className='lisiting_section'>
                    <Listings listings={currntListings} />
                </section>

                <section className='pagination_section'>
                    <div className='row'>
                        {
                            listings.length !== 0 ? (
                                <Pagination
                                    itemsPerPage={listPerPage}
                                    count={listings.length}
                                    visitPage={visitPage}
                                    prev_page={prev_page_number}
                                    next_page={next_page_number}
                                    active={activePage}
                                    setActive={setActivePage}
                                />
                            ) : null
                        }
                    </div>
                </section>
                <Cards />
            </main>

            <aside className='side_section'>
                <ListingForm setListings={setListings} />
            </aside>
        </>
    )
}

export default Home
