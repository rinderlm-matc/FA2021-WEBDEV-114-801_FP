import { author, description, keywords, title, viewport } from '../constants'

import Head from 'next/head'
import { MetaProps } from '../interfaces/props/MetaProps'
import React from 'react'
import { Util } from '../utils/util'

class Meta extends React.PureComponent<MetaProps> {

    constructor(props: MetaProps) {
        super(props);
    }

    render() {
        return (
            <Head>
                <title>{this.props.title}</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content={ viewport } />
                <meta name="author" content={ author }/>
                <meta name="description" content={ description }/>
                <meta name="keywords" content={ keywords }/>
                <meta name="robots" content="index, follow" />
                <meta property="og:type" content="crypto accountancy" />
                <meta property="og:title" content="Crypto Accountant" />
                <meta property="og:description" content={ description } />
                <meta property="og:image" content={ Util.getAssetUrl("/img/favicon.ico") } />
                <meta property="og:url" content="PERMALINK" />
                <meta property="og:site_name" content={title} />
                <link rel="shortcut icon" href={ Util.getAssetUrl("/img/favicon.ico") } />  
                <link rel="canonical" href="https://mcaweb.matc.edu/rinderlm/webdev114/final/" />
            </Head>
        );
    }
}

export default Meta