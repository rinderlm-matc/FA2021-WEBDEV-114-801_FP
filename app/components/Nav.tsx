import Link from 'next/link'
import React from 'react'
import { Util } from '../utils/util'

class Nav extends React.PureComponent {

    constructor(props: any) {
        super(props);
        this.state =
        {
            responsive: "",
            pages: [  
                {
                    index: 2,
                    title: "ABOUT",
                    route: "/about"
                },
                {
                    index: 1,
                    title: "HOME",
                    route : "/",
                },
            ]
        }
    }
    
    render() {
        return (
            <header>
                <nav>
                    <Link href="/"><a className="logo"><img src={Util.getAssetUrl("/img/logo.png")} /></a></Link>
                    <input className="menu-btn" type="checkbox" id="menu-btn"/>
                    <label className="menu-icon" htmlFor="menu-btn"><span className="nav-icon"></span></label>
                    <ul className="menu">
                        {
                            // @ts-ignore
                            this.state.pages.map((page: any) =>
                                (<li key={ page.index } className="click-color-fade"><Link href={ page.route }>{ page.title }</Link></li> )
                            )
                        } 
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Nav