import React from 'react'
import Head from 'next/head'


const Layout = (props) => (
    <div>
        <Head>
            <title>Adeniyi Adedamola</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
        </Head>
        <div>
            {props.children}
        </div>
    </div>
)

export default Layout
