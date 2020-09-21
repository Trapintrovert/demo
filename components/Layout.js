import React from 'react'
import Head from 'next/head'
import Navbarr from './Navbar'
import Footer from './Footer'
import '../scss/main.scss'


const Layout = (props) => (
    <div>
        <Head>
            <title>&#x26A1; Trap Introvert &#x26A1; </title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;1,100;1,200&display=swap" rel="stylesheet"></link>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==" crossOrigin="anonymous" />
        </Head>

        <div>
            <Navbarr/>
            {props.children}
            <Footer/>
        </div>
    </div>
)

export default Layout
