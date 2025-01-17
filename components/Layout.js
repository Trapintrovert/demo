import React from 'react'
import Head from 'next/head'
import Navbarr from './Navbar'
import Footer from './Footer'


const Layout = (props) => (
    <div>
        <Head>
            <title>&#x26A1; Trap Introvert &#x26A1; </title>

            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <meta name="theme-color" content="#000000"/>
            <meta name="title" content="⚡ Trap Introvert ⚡"/>
            <meta name="description" content="I'm interested in building thing with JavaScript, I write React and NodeJS and also proficient in CMS like WordPress, Magento, and Shopify."/>

            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content="https://www.trapintrovert.com/"/>
            <meta property="twitter:title" content="⚡ Trap Introvert ⚡"/>
            <meta property="twitter:description" content="I'm interested in building thing with JavaScript, I write React and NodeJS and also proficient in CMS like WordPress, Magento, and Shopify."/>
            <meta property="twitter:image" content="https://www.trapintrovert.com/favicon-16x16.png"></meta>

            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;1,100;1,200&display=swap" rel="stylesheet"></link>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==" crossOrigin="anonymous" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        </Head>

        <div>
            <Navbarr/>
            {props.children}
            <Footer/>
        </div>
    </div>
)

export default Layout
