import React, { useState } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import propTypes from 'prop-types';

const ListingForm = (props) => {

    const [formData, setFormData] = useState({
        sale_type: 'For Sale!',
        price: '$0+',
        bedrooms: '0+',
        bathrooms: '0+',
        home_type: 'House',
        sqrft: '1000+',
        days_listed: '1 or less',
        has_photos: '0+',
        open_house: 'false',
        keywords: ''
    });

    const { sale_type, price, bedrooms, bathrooms, home_type, sqrft, days_listed, has_photos, open_house, keywords } = formData;

    const [loading, setLoading] = useState(false)

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        axios.defaults.headers = {
            'Content-Type': 'application/json'
        };

        setLoading(true);

        axios.post('http://localhost:8000/api/listings/search', { sale_type, price, bedrooms, bathrooms, home_type, has_photos, sqrft, days_listed, open_house, keywords })
            .then(res => {
                setLoading(false);
                props.setListings(res.data);
                window.scrollTo(0, 0);
            })
            .catch(err => {
                setLoading(false);
                window.scrollTo(0, 0);
            })
    }
    return (
        <>
            <form className='lisitings_form' onSubmit={onSubmit}>
                <div className='row mb-5'>
                    <div className='col-6'>
                        <div className='lisitings_form_section'>
                            <label className='lisitings_form_label' htmlFor='sale_type' >Sale or Rent:</label>
                            <select className='lisitings_form_select' onChange={onChange} value={sale_type}>
                                <option>For Sale</option>
                                <option>For Rent</option>
                            </select>
                        </div>
                    </div>

                    <div className='col-6'>
                        <div className='lisitings_form_section'>
                            <label className='lisitings_form_label' htmlFor='home_type' >Home Type:</label>
                            <select className='lisitings_form_select' onChange={onChange} value={home_type}>
                                <option>HOUSE</option>
                                <option>Guest House</option>
                                <option>Town House</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className='row mb-5'>
                    <div className='col-6'>
                        <div className='lisitings_form_section'>
                            <label className='lisitings_form_label' htmlFor='sqrft' >Square Feet:</label>
                            <select className='lisitings_form_select' onChange={onChange} value={sqrft}>
                                <option>1000+</option>
                                <option>1200+</option>
                                <option>1400+</option>
                                <option>1500+</option>
                                <option>2000+</option>
                                <option>Any</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='lisitings_form_section'>
                            <label className='lisitings_form_label' htmlFor='has_photos' >Photos:</label>
                            <select className='lisitings_form_select' onChange={onChange} value={has_photos}>
                                <option>0+</option>
                                <option>1+</option>
                                <option>2+</option>
                                <option>3+</option>
                                <option>4+</option>
                                <option>5+</option>
                                <option>10+</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className='row mb-5'>
                    <div className='col-6'>
                        <div className='lisitings_form_section'>
                            <label className='lisitings_form_label' htmlFor='bedrooms' >Bedrooms:</label>
                            <select className='lisitings_form_select' onChange={onChange} value={bedrooms}>
                                <option>0+</option>
                                <option>1+</option>
                                <option>2+</option>
                                <option>3+</option>
                                <option>4+</option>
                                <option>5+</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='lisitings_form_section'>
                            <label className='lisitings_form_label' htmlFor='bathrooms' >Baths:</label>
                            <select className='lisitings_form_select' onChange={onChange} value={bathrooms}>
                                <option>0+</option>
                                <option>1+</option>
                                <option>2+</option>
                                <option>3+</option>
                                <option>4+</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className='row mb-5'>
                    <div className='col-6'>
                        <div className='lisitings_form_section'>
                            <label className='lisitings_form_label' htmlFor='price' >Price:</label>
                            <select className='lisitings_form_select' onChange={onChange} value={price}>
                                <option>$0+</option>
                                <option>$200,000+</option>
                                <option>$400,000+</option>
                                <option>$600,000+</option>
                                <option>$800,000+</option>
                                <option>$1,000,000+</option>
                                <option>$1,500,000+</option>
                                <option>Any</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='lisitings_form_section'>
                            <label className='lisitings_form_label' htmlFor='days_listed' >Days Listed:</label>
                            <select className='lisitings_form_select' onChange={onChange} value={days_listed}>
                                <option>1 or less</option>
                                <option>2 or less</option>
                                <option>3 or less</option>
                                <option>4 or less</option>
                                <option>5 or less</option>
                                <option>10 or less</option>
                                <option>20 or less</option>
                                <option>Any</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className='row mb-5'>
                    <div className='col-10'>
                        <div className='lisitings_form_section'>
                            <label className='lisitings_form_label' htmlFor='keywords' >Keywords:</label>
                            <input className='lisitings_form_input' value={keywords} onChange={onChange} />
                        </div>
                    </div>
                </div>

                <div className='row mb-5'>
                    <div className='col-10'>
                        <div className='lisitings_form_section'>
                            <label className='lisitings_form_label' htmlFor='open_house' >Open House:</label>
                            <input className='lisitings_form_checkbox' type='checkbox' value={open_house} onChange={onChange} />
                        </div>
                    </div>
                </div>

                <div className='row mb-5'>
                    <div className='col-10'>
                        {
                            loading ? (
                                <div className='lisitings_form_loader'>
                                    <Loader
                                        type='Oval'
                                        height={50}
                                        width={50}
                                        color='#f05454'
                                    />
                                </div>
                            ) : (
                                    <button className='lisitings_form_btn btn'>Save</button>
                                )
                        }
                    </div>
                </div>
            </form>
        </>
    );
};

ListingForm.propTypes = {
    setListings: propTypes.func.isRequired
};

export default ListingForm
