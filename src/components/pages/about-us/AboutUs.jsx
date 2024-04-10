import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutUs = () => {
    return (
        <div className='md:m-10'>
            <header className='mt-10'>
                <h1 className='text-4xl '>Welcome to Reindeer Real Estate</h1>
                <p className='text-xl mt-2'>Where Dreams Find a Home</p>
            </header>
            <main>
                <section className='my-10'>
                    <h2 className='text-2xl '>Our Story</h2>
                    <p>Founded on the principles of integrity, passion, and a genuine desire to help people find their ideal homes, Reindeer Real Estate has quickly become a trusted name in the residential real estate industry. Our journey began with a vision to create a platform that simplifies the home buying and selling process while prioritizing the needs and aspirations of our clients.</p>
                </section>
                <section className='my-10'>
                    <h2 className='text-2xl '>Why Choose Us?</h2>
                    <ol className='list-disc *:ml-4'>
                        <li>
                            <h3 className='text-xl py-2 font-semibold'>Personalized Approach</h3>
                            <p>We understand that each client is unique, with their own set of preferences, budget constraints, and dreams. That's why we take a personalized approach to every interaction, tailoring our services to match your specific needs and preferences.</p>
                        </li>
                        <li>
                            <h3 className='text-xl py-2 font-semibold'>Expert Guidance</h3>
                            <p>Buying or selling a home can be a daunting task, but you don't have to navigate it alone. Our team of experienced real estate professionals is here to provide you with expert guidance every step of the way. From market insights to negotiation strategies, we'll empower you with the knowledge and support you need to make informed decisions.</p>
                        </li>
                        <li>
                            <h3 className='text-xl py-2 font-semibold'>Comprehensive Listings</h3>
                            <p>Whether you're searching for a cozy cottage, a modern condo, or a sprawling estate, our extensive database of listings has something for everyone. With detailed descriptions, high-quality images, and virtual tours, you can explore properties from the comfort of your own home.</p>
                        </li>
                        <li>
                            <h3 className='text-xl py-2 font-semibold'>Community Connection</h3>
                            <p>At Reindeer Real Estate, we believe that a home is more than just four walls and a roof; it's a place where you belong. That's why we're passionate about fostering strong communities and helping you find a neighborhood that suits your lifestyle and values.</p>
                        </li>
                        <li>
                            <h3 className='text-xl py-2 font-semibold'>Transparency and Trust</h3>
                            <p>We believe that transparency is the cornerstone of trust, which is why we're committed to maintaining open and honest communication with our clients at all times. From pricing strategies to contract negotiations, you can trust us to always have your best interests at heart.</p>
                        </li>
                    </ol>
                </section>
                <section className='my-10'>
                    <h2 className='text-2xl my-2'>Our Promise</h2>
                    <p>When you choose Reindeer Real Estate, you're not just hiring a real estate agency; you're gaining a trusted partner who is dedicated to helping you achieve your real estate goals. Whether you're a first-time buyer, a seasoned investor, or looking to sell your current property, we're here to guide you every step of the way.</p>
                    <p>Thank you for considering Reindeer Real Estate for your real estate needs. We look forward to helping you turn your dreams into reality. Get in touch with us today and let's embark on this exciting journey together!</p>
                </section>
            </main>
            <Helmet>
                <title>Raindeer - About us</title>
            </Helmet>
        </div>
    );
};

export default AboutUs;