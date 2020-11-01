import { copyright, title } from '../constants'

import Footer from '../components/Footer'
import { LayoutProps } from '../interfaces/props/LayoutProps'
import Meta from '../components/Meta'
import Nav from '../components/Nav'
import React from 'react'

class Layout extends React.PureComponent<LayoutProps> {
    
  constructor(props: LayoutProps) {
    super(props);
    this.state = {
      "isCookieAccepted": false,
    }
  }

  acceptCookie = () => {
    this.setState({isCookieAccepted: !this.state.isCookieAccepted});
  }

  render() {
    return (
      <React.Fragment>
        <Meta title={title} />  
        <Nav />
        {
          this.props.loadSidebar
            ?
            ( <main>
                <div className="content">
                  { this.props.children }
                </div>
                <div className="sidebar">
                  <h2>Crypto News</h2>
                    <article>
                      <h3>Bitcoin</h3>
                      <p>Prices going up</p>
                    </article>
                </div>
              </main>
            )
            :
            (
              <main>
                <div className="splash">
                  { this.props.children }
                </div>
              </main>
            )
          }
        {
          !this.state.isCookieAccepted 
            ?
            (
              <div className="cookie-consent">
                <p>
                  This is a statically exported <a href="https://www.nextjs.com" target="_blank">NextJS</a> project.&nbsp;
                  It was build in Typescript superset, React HTML rendering, Sass CSS compilation, 
                  and Mongo database backend. You can browse the project files at my public github&nbsp;
                  <a href="https://github.com/rinderlm-matc/FA2021-WEBDEV-114-801_FP" target="_blank">repository</a>.
                  You can also grab a test crypto trading ledger
                  <a href="https://github.com/rinderlm-matc/FA2021-WEBDEV-114-801_FP/blob/master/app/public/files/trades.csv" target="_blank">
                  &nbsp;csv file
                  </a>
                  &nbsp;to test on the profile page. NextJS has been configured to combine all SASS stylesheets into a style 
                  tag in the head. My custom css framework is located <a href="https://github.com/rinderlm-matc/FA2021-WEBDEV-114-801_FP/tree/master/app/public/css" target="_blank">
                    here
                  </a>
                  &nbsp; for easy viewing. If having a statically compiled css stylesheet is absolutely required for the final project
                  I can reconfigure it after my workflow is mostly done. 
                </p>
                <p className="cookie-accept" onClick={ this.acceptCookie }>x</p>
              </div>
            )
            : (<div></div>)          
          }
      <Footer copyright={copyright}/>
      </React.Fragment>
    );
  }
}

export default Layout
