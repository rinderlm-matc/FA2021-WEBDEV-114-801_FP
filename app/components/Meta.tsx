import { author, description, keywords, viewport } from '../constants'

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
                <meta name="viewport" content={viewport} />
                <meta name="author" content={ author }/>
                <meta name="description" content={ description }/>
                <meta name="keywords" content={ keywords }/>
                <link rel="shortcut icon" href={Util.getAssetUrl("/img/favicon.ico")} />  
            </Head>
        );
    }
}

export default Meta